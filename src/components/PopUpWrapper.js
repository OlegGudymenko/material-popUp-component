import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../index.css'
import Modal from './Modal';

class PopUpWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      savedData: [],
      submitData: []
    }
  }

  modalHide = (data) => {
    const savedData = data.length > 0 ? data : []
    this.setState({
      show: false,
      savedData: savedData
    })
  }

  modalShow = () => {
    this.setState({
      ...this.state,
      show: true
    })
  }

  saveSubmitData = (data) => {
    this.setState({
      show: false,
      savedData: [],
      submitData: data
    })
  }

  renderList = (data) => (
    <ul className='submited_data_list'>
      {
        data.map((item, index) => (
          <li key={index}>
            <span>{item.select}</span>
            <span>{item.number}</span>
          </li>
        ))
      }
    </ul>
  )

  render(){
    const { show, savedData, submitData } = this.state;

    return (
      <MuiThemeProvider>
        <div className='pop_up_wrapper'>
            <RaisedButton
              label={show ? 'hide' : 'show'}
              onClick={show ? this.modalHide : this.modalShow} />
            {show && <Modal
              initialData={savedData}
              toggleModal={this.modalHide}
              saveSubmitData={this.saveSubmitData}/>}

           {submitData.length > 0 && this.renderList(submitData)}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default PopUpWrapper;
