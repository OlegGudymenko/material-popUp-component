import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class InputField extends React.Component{
  shouldComponentUpdate(nextProps){
    if(this.props.value !== nextProps.value) {
      return true
    }
    return false
  }

  render(){
    const { value, id, name, handleChange } = this.props;
    return (
      <TextField
        className='input_field'
        id={id}
        type='number'
        name={name}
        value={value}
        onChange={(e, value) => handleChange(name, value)}/>
    )
  }
}

InputField.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default InputField;
