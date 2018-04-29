import React from 'react';
import PropTypes from 'prop-types';

const TitleBlock = ({ title, handleClick }) => (
  <div className='title_input_container'>
    {title}
    <span
      className='clean_title'
      onClick={handleClick}/>
  </div>
)

TitleBlock.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

export default TitleBlock;
