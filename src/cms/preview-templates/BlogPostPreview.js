import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

import { blogAuthorName, blogAuthorAvatar } from '../../../data/siteConfig';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <BlogPostTemplate
        inEditor={true}
        title={data.title}
        description={data.description}
        tags={data.tags}
        category={data.category}
        date={data.date}
        cover={data.cover}
        coverImageAlt={data.coverImageAlt}
        html={widgetFor('body')}
        blogSettings={{ blogAuthorName, blogAuthorAvatar }}
      />
    );
  }

  return 'Loading...';
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
