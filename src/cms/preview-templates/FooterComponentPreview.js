import React from 'react';
import PropTypes from 'prop-types';
import { FooterTemplate } from '../../components/Footer';

const FooterComponentPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <FooterTemplate inEditor={true} data={data} />;
  }

  return 'Loading...';
};

FooterComponentPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default FooterComponentPreview;
