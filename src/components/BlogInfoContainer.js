import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const BlogInfoContainer = ({ blogSettings, date, timeToRead, className }) => {
  const { blogAuthorName, blogAuthorAvatar } = blogSettings;

  return (
    <div className={`d-flex ${className}`}>
      <PreviewCompatibleImage
        src={blogAuthorAvatar}
        style={{
          width: '60px',
          marginBottom: '0px',
          marginRight: '10px',
          borderRadius: '50%'
        }}
      />
      <div className="d-flex flex-column justify-content-center">
        <p className="m-0">{blogAuthorName}</p>
        <p className="m-0">
          {moment(date).format('ll')} • {`${timeToRead} min read`}
        </p>
      </div>
    </div>
  );
};

BlogInfoContainer.defaultProps = {
  className: ''
};

BlogInfoContainer.propTypes = {
  className: PropTypes.string,
  blogSettings: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired
};

export default BlogInfoContainer;
