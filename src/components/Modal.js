import React, { PureComponent } from 'react';
import ButtonsContainer from './ButtonsContainer';
import FieldsContainer from './FieldsContainer';
import TitleBlock from './TitleBlock';
import FlatButton from 'material-ui/FlatButton';

class Modal extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      fields: props.initialData.length
        ? props.initialData
        : [{
            id: 1,
            select: '',
            number: ''
        }]
    }
  }

  handleChange = (id, name, value) => {
    const newFields = this.state.fields.map(item => {
      if(item.id == id) {
        item[name] = value
      }
      return item;
    })

    this.setState({
      ...this.state,
      fields: newFields
    })
  }

  removeFieldItem = (id) => {
    this.setState({
      fields: this.state.fields.filter(item => item.id !== id)
    })
  }

  addFieldItem = () => {
    const { fields } = this.state;
    const itemId = fields.length
      ? fields[fields.length - 1].id + 1
      : 1

    const newItem = {
      id: itemId,
      select: '',
      number: ''
    }

    this.setState({
      fields: [...fields, newItem]
    })
  }

  renderFields = (data) => (
    <div className='fields_wrapper'>
    {
      data.map(item =>
        <FieldsContainer
          key={item.id}
          data={item}
          handleChange={(name, value) => this.handleChange(item.id, name, value)}
          handleClick={this.removeFieldItem}/>
      )
    }
    </div>
  )


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveSubmitData(this.state.fields);
  }

  toggleModal = () => {
    this.props.toggleModal(this.state.fields);
  }

  render(){
    const { toggleModal } = this.props;
    return (
      <div className='modal_wrapper'>
        <form onSubmit={this.handleSubmit}>
          <TitleBlock
            title='Структура номеров'
            handleClick={() => toggleModal(this.state.fields)}/>
          {this.renderFields(this.state.fields)}
          <FlatButton
            label="Добавить"
            primary={true}
            className='add_btn'
            onClick={this.addFieldItem}/>
          <ButtonsContainer
            toggleModal={this.toggleModal}
            handleSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Modal;
