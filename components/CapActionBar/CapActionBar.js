/**
* CapActionBar
*/
import React from "react";
import PropTypes from 'prop-types';
import "./_capActionBar.scss";
import CapRow from "../CapRow";
import CapColumn from "../CapColumn";
import CapSearchBar from "../CapSearchBar";
import CapSelect from "../CapSelect";
import CapButton from "../CapButton";
import CapFormItem from "../CapFormItem";
import CapRadioGroup from "../CapRadioGroup";
import CapRadioButton from "../CapRadioButton";

function RadioButtonComponent(props) {
  const {options, ...otherProps} = props;
  return (
    <CapRadioGroup {...otherProps}>
      {
        options.map((option, optionInd) => (
          <CapRadioButton key={optionInd} {...option}>{option.label}</CapRadioButton>
        ))
      }
    </CapRadioGroup>
  );
}
export default class CapActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const rowProps = this.props.row ? this.props.row.props : [];
    return (
      <CapRow {...rowProps} className={this.props.className ? `cap-action-bar ${this.props.className}` : "cap-action-bar"}>
        { this.props.search &&
          <CapColumn {...this.props.search.capColumn}>
            <CapFormItem {...this.props.search.formItem}>
              <CapSearchBar className="height-reset padding-zero" {...this.props.search.props}/>
            </CapFormItem>
          </CapColumn>
        }
        { this.props.filterItemOne &&
          <CapColumn {...this.props.filterItemOne.capColumn}>
            <CapFormItem {...this.props.filterItemOne.formItem}>
              { this.props.filterItemOne.radioButton ?
                <RadioButtonComponent {...this.props.filterItemOne.props} />
                :
                <CapSelect className="height-reset padding-zero" {...this.props.filterItemOne.props}/>
              }
            </CapFormItem>
          </CapColumn>
        }
        { this.props.filterItemTwo &&
          <CapColumn {...this.props.filterItemTwo.capColumn}>
            <CapFormItem {...this.props.filterItemTwo.formItem}>
              <CapSelect className="height-reset padding-zero" {...this.props.filterItemTwo.props}/>
            </CapFormItem>
          </CapColumn>
        }
        { this.props.sort &&
          <CapColumn {...this.props.sort.capColumn}>
            <CapFormItem {...this.props.sort.formItem}>
              <CapSelect className="height-reset padding-zero" {...this.props.sort.props}/>
            </CapFormItem>
          </CapColumn>
        }
        { this.props.actionItemOne &&
          <CapColumn {...this.props.actionItemOne.capColumn}>
            <CapButton {...this.props.actionItemOne.props}>
              {this.props.actionItemOne.props.children}
            </CapButton>
          </CapColumn>
        }
        { this.props.actionItemTwo &&
          <CapColumn {...this.props.actionItemTwo.capColumn}>
            <CapButton {...this.props.actionItemTwo.props}>
              {this.props.actionItemTwo.props.children}
            </CapButton>
          </CapColumn>
        }
      </CapRow>
    );
  }
}

CapActionBar.propTypes = {
  className: PropTypes.string,
  search: PropTypes.object,
  filterItemOne: PropTypes.object,
  row: PropTypes.object,
  sort: PropTypes.object,
  filterItemTwo: PropTypes.object,
  actionItemOne: PropTypes.object,
  actionItemTwo: PropTypes.object,
};

RadioButtonComponent.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
};
