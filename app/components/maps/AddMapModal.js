import React from 'react';
import {Link} from 'react-router';

const AddMapModal = props => {
  return (
    <div>
      <Link to="/global-scenarios">Close</Link>
      <p>modal contents</p>
      <button onClick={props.onAddClick}>add map</button>
    </div>
  );
};

AddMapModal.propTypes = {
  onAddClick: React.PropTypes.func
};

export default AddMapModal;
