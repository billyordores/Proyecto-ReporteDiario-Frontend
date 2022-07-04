import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = ({ color = 'primary' }) => {
  return (
    <div className="cr-page-spinner">
      <Spinner color={color} />
    </div>
  );
};

PageSpinner.propTypes = {
  color: PropTypes.oneOf([
    'userCard',
    'searchbar',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'crudtitle',
    'deletecorrect'
  ]),
};

export default PageSpinner;
