import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const selectFieldStyle = {
  'width': '120px'
}

class SelectInput extends React.Component{
  shouldComponentUpdate(nextProps){
    if(this.props.value !== nextProps.value) {
      return true
    }
    return false
  }
  render(){
    const { listItems, value, name, handleChange } = this.props;
    return (
      <SelectField
        style={selectFieldStyle}
        value={value}
        name={name}
        onChange={(e, i, value) => handleChange(name, value)}
        >
        {listItems.map((item, index) =>
          <MenuItem value={item} key={index} primaryText={item} />
        )}
      </SelectField>
    )
  }
}

SelectInput.defaultProps = {
  listItems: ['Twin', 'Tripple', 'Quadro']
}

SelectField.propTypes = {
  listItems: PropTypes.array,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}

export default SelectInput;
