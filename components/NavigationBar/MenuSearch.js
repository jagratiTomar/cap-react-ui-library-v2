import React, { PropTypes } from 'react';
import {
  Icon, Input, Popover, Spin,
} from 'antd';
import { Link } from 'react-router';
import forEach from 'lodash/forEach';

import './_menuSearch.scss';

export default class MenuSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchingMenuSearchResults !== prevProps.fetchingMenuSearchResults && !prevProps.fetchingMenuSearchResults && this.state.searchText) {
      this.props.onSearch(this.state.searchText);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.popover && this.popoverContent && !this.popover.contains(e.target) && !this.popoverContent.contains(e.target)) {
      this.setState({ searchText: "" });
    }
  }

  clearSearch = () => {
    this.setState({ searchText: "" });
  }

  handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText) {
      this.setState({ searchText });
      this.props.onSearch(searchText);
    } else {
      this.clearSearch();
    }
  };

  generateHighlightedText = (text) => {
    const { searchText } = this.state;
    const splitPattern = searchText ? new RegExp(`(${searchText})`, 'gi') : '';
    const miniWords = text.split(splitPattern);
    const html = [];
    forEach(miniWords, (miniWord, index) => {
      if (searchText && miniWord.toLowerCase() === searchText.toLowerCase()) {
        html.push(<span key={index} data-value={text} className="highlighted-item"><strong data-value={text}>{miniWord}</strong></span>);
      } else {
        html.push(<span key={index} data-value={text}>{miniWord}</span>);
      }
    });
    return <span data-value={text}>{html}</span>;
  }

  renderItem = (item, index) => {
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
      <div className="link-items" key={`item-${index}`}>
        <Link {...linkProps}>{this.generateHighlightedText(item.text)}</Link>
        <Link {...newTabLinkProps}>
          <div className="new-tab-link-wrapper"><i className="material-icons">open_in_new</i></div>
        </Link>
      </div>
    );
  }

  renderResults = (allSearchResults) => {
    const { isAdvancedSearching, advancedSearchMessage } = this.props;
    const renderCat = allSearchResults.map((item, index) => {
      if (!item.children) {
        return this.renderItem(item, index);
      }
      const childrenHtml = item.children.map((childItem, childIndex) => this.renderItem(childItem, `childItem-${childIndex}-${index}`));
      return (
        <div key={`item-group-${index}`} className="links-group">
          <div className="group-heading">{item.text}</div>
          <div className="group-children">{childrenHtml}</div>
        </div>);
    });
    return (
      <div className="links-content">
        {renderCat}
        {isAdvancedSearching && <div className="adv-search-message">{advancedSearchMessage}</div>}
      </div>
    );
  };

  render() {
    const {
      isLoading, searchSupportPortalText, isAdvancedSearching, searchSupportPortalUrl,
      noSearchResultsFoundText, placeholder, searchData, fetchingMenuSearchResults,
    } = this.props;
    const { searchText } = this.state;
    const noResults = (!searchData || searchData.length === 0);
    const searchResultsComponent = !!searchText && (noResults && !isAdvancedSearching
      ? <div className="no-results content">{noSearchResultsFoundText}</div> : this.renderResults(searchData));
    const supportPortalUrl = searchSupportPortalUrl.replace("{{searchText}}", searchText);
    return (
      <div ref={(node) => { this.popover = node; }}>
        <Popover
          overlayClassName="search-results-popover"
          placement="bottomLeft"
          visible={!!searchText}
          trigger="click"
          content={
            !!searchText && (
              <div ref={(node) => { this.popoverContent = node; }}>
                {isLoading || fetchingMenuSearchResults ? <div className="content"><Spin /></div> : searchResultsComponent}
                <div className="portal-url-container">
                  <a href={supportPortalUrl} target="_blank">{`${searchSupportPortalText}: ${searchText}`}</a>
                </div>
              </div>
            )
          }
        >
          <Input
            value={searchText}
            className="sidebar-search"
            placeholder={placeholder}
            onChange={this.handleSearch}
            onClick={this.inputClicked}
            prefix={<Icon className="search-icon" type="search" />}
            suffix={!!searchText && <Icon onClick={this.clearSearch} className="close-icon" type="close" />}
          />
        </Popover>
      </div>
    );
  }
}

MenuSearch.defaultProps = {
  noSearchResultsFoundText: "No results found for the searched keyword",
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
