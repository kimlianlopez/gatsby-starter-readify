import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import urljoin from 'url-join';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  lang,
  image,
  path,
  imageAlt,
  isBlogPost
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
        siteMetadata {
          title
          description
          siteTitleAlt
          author
          logo
          siteUrl
        }
      }
    }
  `);

  const { pathPrefix, siteMetadata } = site;
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = !!image
    ? urljoin(siteMetadata.siteUrl, image)
    : siteMetadata.logo;
  const completePageUrl = urljoin(siteMetadata.siteUrl, path);
  const contentType = !!isBlogPost ? 'article' : 'website';

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteMetadata.siteUrl,
      name: metaTitle,
      alternateName: siteMetadata.siteTitleAlt ? siteMetadata.siteTitleAlt : '',
      author: {
        '@type': 'Person',
        name: siteMetadata.author
      }
    }
  ];

  if (isBlogPost) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': completePageUrl,
              name: title,
              image: metaImage
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteMetadata.siteUrl,
        name: title,
        alternateName: siteMetadata.siteTitleAlt
          ? siteMetadata.siteTitleAlt
          : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: metaImage
        },
        description: metaDescription
      }
    );
  }

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}>
      {/* Title */}
      <html lang={lang} />
      <title>{title}</title>

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* General tags */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta name="lang" content={lang} />
      <meta name="author" content={siteMetadata.author} />

      {/* Site Canonical */}
      {/* <link rel="canonical" href={completePageUrl} /> */}

      {/* OpenGraph tags */}
      <meta property="og:url" content={pathPrefix + path} />
      <meta property="og:type" content={contentType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteMetadata.title} />

      {/* Twitter tags */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: '',
  description: '',
  lang: 'en',
  image: '',
  imageAlt: '',
  isBlogPost: false
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  isBlogPost: PropTypes.bool,
  path: PropTypes.string.isRequired
};

export default SEO;
