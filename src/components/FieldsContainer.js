import React , { PureComponent} from 'react';
import SelectInput from './Fields//SelectInput';
import InputField from './Fields/InputField'

import RemoveButton from './RemoveButton';

//
// const FieldsContainer = (props) => {
//   const { handleClick, data, handleChange } = props;
//   return (
//     <div className='fields_container'>
//       <SelectInput
//         value={data.select}
//         name='select'
//         handleChange={handleChange}
//       />
//       <InputField
//         value={data.number}
//         id={data.id.toString()}
//         handleChange={handleChange}
//         name='number'/>
//       <RemoveButton
//         onClick={() => handleClick(data.id)}/>
//     </div>
//   )
// }
class FieldsContainer extends PureComponent{
  render(){
    const { handleClick, data, handleChange } = this.props;
    return (
      <div className='fields_container'>
        <SelectInput
          value={data.select}
          name='select'
          handleChange={handleChange}
        />
        <InputField
          value={data.number}
          id={data.id.toString()}
          handleChange={handleChange}
          name='number'/>
        <RemoveButton
          onClick={() => handleClick(data.id)}/>
      </div>
    )
  }
}
export default FieldsContainer;
