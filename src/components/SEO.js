import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import urljoin from 'url-join';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ title, description, lang, image, path, isBlogPost }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
        siteMetadata {
          title
          description
          siteName
          siteTitleAlt
          author
          developer
          image
          siteUrl
        }
      }
    }
  `);

  const { pathPrefix, siteMetadata: siteMeta } = site;
  const metaTitle = !!title ? `${title} | ${siteMeta.title}` : siteMeta.title;
  const metaDescription = description || siteMeta.description;
  const metaImage = image || siteMeta.image;
  const completeSiteUrl = urljoin(siteMeta.siteUrl, pathPrefix, path);

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: completeSiteUrl,
      name: title,
      alternateName: siteMeta.siteTitleAlt ? siteMeta.siteTitleAlt : '',
      author: {
        '@type': 'Person',
        name: siteMeta.author
      }
    }
  ];

  return (
    <Helmet>
      {/* Title */}
      <title>{metaTitle}</title>

      {/* General tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta name="lang" content={lang} />
      <meta name="url" content={siteMeta.siteUrl} />
      <meta name="author" content={siteMeta.author} />
      <meta name="developer" content={siteMeta.developer} />

      {/* Site Canonical */}
      <link rel="canonical" href={completeSiteUrl} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteMeta.siteUrl} />
      {isBlogPost ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={siteMeta.siteName} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: '',
  description: '',
  lang: 'en',
  image: '',
  isBlogPost: false
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool,
  path: PropTypes.string.isRequired
};

export default SEO;
