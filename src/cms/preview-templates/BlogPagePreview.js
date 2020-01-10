import React from 'react';
import PropTypes from 'prop-types';
// import IndexPageTemplate from '../../templates/index-page';

const BlogPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return <div>Blog Page</div>;
  }

  return 'Loading...';
};

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default BlogPagePreview;
