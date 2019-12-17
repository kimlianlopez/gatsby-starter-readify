import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        inEditor={true}
        heroSection={data.heroSection}
        aboutSection={data.aboutSection}
        featuredSection={data.featuredSection}
        contactSection={data.contactSection}
      />
    );
  }

  return 'Loading...';
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
