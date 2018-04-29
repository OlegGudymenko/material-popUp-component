import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const RemoveButton = (props) => {
  return (
    <FloatingActionButton
      mini={true}
      className='remove_btn'
      onClick={props.onClick}>
    </FloatingActionButton>
  )
}

export default RemoveButton;
