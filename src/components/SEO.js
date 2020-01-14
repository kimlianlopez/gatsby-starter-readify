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
          siteTitleAlt
          author
          developer
          logo
          siteUrl
        }
      }
    }
  `);

  const { pathPrefix, siteMetadata } = site;
  // const metaTitle = !!title
  //   ? `${title} | ${siteMetadata.title}`
  //   : siteMetadata.title;
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = !!image
    ? urljoin(siteMetadata.siteUrl, image)
    : siteMetadata.logo;
  const completePageUrl = urljoin(siteMetadata.siteUrl, pathPrefix, path);
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
        url: urljoin(siteMetadata.siteUrl, pathPrefix),
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
      <title>{title}</title>

      {/* General tags */}
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      /> */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      {/* <meta name="lang" content={lang} /> */}
      {/* <meta name="url" content={completePageUrl} /> */}
      {/* <meta name="author" content={siteMetadata.author} /> */}
      {/* <meta name="developer" content={siteMetadata.developer} /> */}

      {/* Site Canonical */}
      <link rel="canonical" href={completePageUrl} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      {/* <meta property="og:url" content={completePageUrl} /> */}
      {/* <meta property="og:type" content={contentType} /> */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      {/* <meta property="og:locale" content={lang} /> */}
      {/* <meta property="og:site_name" content={siteMetadata.siteName} /> */}
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
