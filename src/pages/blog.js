import React from 'react';

import BlogPageTemplate from '../templates/blog-page';
import SEO from '../components/SEO';

const BlogPage = props => {
  return (
    <>
      <SEO title="Blog" path={props.path} />
      <BlogPageTemplate />
    </>
  );
};

export default BlogPage;
