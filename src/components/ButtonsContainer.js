import React, { PureComponent } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class ButtonsContainer extends PureComponent {
  render(){
    const { handleSubmit, toggleModal } = this.props;
    return (
      <div className='button_container'>
        <RaisedButton
          label="Сохранить"
          primary={true}
          style={{
            'marginRight': '20px'
          }}
          onClick={handleSubmit}/>
        <FlatButton
          label="Отмена"
          onClick={toggleModal}
        />
      </div>
    )
  }
}

export default ButtonsContainer;
