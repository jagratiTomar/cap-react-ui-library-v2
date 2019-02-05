import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
  Input, Icon, Popover, Spin,
} from 'antd';

import './_menuSearch.scss';
import WarningIcon from '../../assets/icons/warning.svg';

const clsPrefix = 'menu-search';

export class MenuSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchText: value });
  }

  handleSearch = (e) => {
    const { onSearch } = this.props;
    const searchText = e.target.value;
    if (searchText) {
      this.setState({ searchText });
      if (onSearch) {
        onSearch(searchText);
      }
    } else {
      this.clearSearch();
    }
  };

  clearSearch = () => {
    this.setState({ searchText: '' });
  }

  generateHighlightedText = (text) => {
    const { searchText } = this.state;
    const splitPattern = searchText ? new RegExp(`(${searchText})`, 'gi') : '';
    const miniWords = text.split(splitPattern);
    const html = [];
    miniWords.forEach((miniWord, index) => {
      if (searchText && miniWord.toLowerCase() === searchText.toLowerCase()) {
        html.push(<span key={index} data-value={text} className="highlighted-item"><strong data-value={text}>{miniWord}</strong></span>);
      } else {
        html.push(<span key={index} data-value={text}>{miniWord}</span>);
      }
    });
    return <span data-value={text}>{html}</span>;
  }

  renderItem = (item) => {
    const { handleItemClick } = this.props;
    const linkProps = { to: item.link };
    const newTabLinkProps = { to: item.link, target: "_blank" };
    if (item.target) { linkProps.target = item.target; }
    if (handleItemClick) {
      linkProps.onClick = (e) => {
        e.persist();
        this.setState({
          searchText: "",
        }, () => item.passBackId ? handleItemClick(e, item.passBackId) : handleItemClick(e));
      };
      newTabLinkProps.onClick = (e) => {
        e.persist();
        if (item.passBackId) {
          handleItemClick(e, item.passBackId);
        } else {
          handleItemClick(e);
        }
      };
    }
    return (
      <div className="link-items" key={`item-${item.key}`}>
        <Link {...linkProps}>{this.generateHighlightedText(item.text)}</Link>
        <Link {...newTabLinkProps}>
          <div className="new-tab-link-wrapper"><i className="material-icons">open_in_new</i></div>
        </Link>
      </div>
    );
  }

  renderResults = (searchData) => {
    const result = searchData.map((data) => {
      if (!data.children) {
        return this.renderItem(data);
      }
    });
    return result;
  }

  render() {
    const {
      isLoading, searchSupportPortalText, isAdvancedSearching, searchSupportPortalUrl,
      noSearchResultsFoundText, placeholder, searchData, fetchingMenuSearchResults,
    } = this.props;
    const { searchText } = this.state;
    const noResults = (!searchData || searchData.length === 0);
    const searchResultsComponent = !!searchText && (noResults && !isAdvancedSearching
      ? (
        <div className={classNames(`${clsPrefix}-no-results content`)}>
          <img src={WarningIcon} alt="no-results" />
          <div className={classNames(`${clsPrefix}-no-results-text`)}>{noSearchResultsFoundText}</div>
        </div>
      )
      : this.renderResults(searchData));
    const supportPortalUrl = searchSupportPortalUrl && searchSupportPortalUrl.replace("{{searchText}}", searchText);
    return (
      <Popover
        overlayClassName={classNames(`${clsPrefix}-popover`)}
        placement="bottomLeft"
        visible={!!searchText}
        trigger="click"
        content={
          !!searchText && (
            <div>
              {isLoading || fetchingMenuSearchResults ? <div className="content"><Spin /></div> : searchResultsComponent}
              {supportPortalUrl && (
                <div className={classNames(`${clsPrefix}-portal-url-container`)}>
                  <a href={supportPortalUrl} target="_blank">{`${searchSupportPortalText}: ${searchText}`}</a>
                </div>
              )}
            </div>
          )
        }
      >
        <div className={classNames(`${clsPrefix}`)}>
          <Input
            placeholder={placeholder}
            onChange={this.handleSearch}
            value={searchText}
          />
          <Icon type="search" />
          <Icon onClick={this.clearSearch} type="close" />
        </div>
      </Popover>
    );
  }
}

MenuSearch.defaultProps = {
  noSearchResultsFoundText: "No results found",
  searchSupportPortalText: "Search support portal for",
  placeholder: "Search",
};

MenuSearch.propTypes = {
  searchData: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchingMenuSearchResults: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  handleItemClick: PropTypes.func,
  noSearchResultsFoundText: PropTypes.string,
  searchSupportPortalText: PropTypes.string,
  isAdvancedSearching: PropTypes.bool,
  advancedSearchMessage: PropTypes.string,
  searchSupportPortalUrl: PropTypes.string,
};
