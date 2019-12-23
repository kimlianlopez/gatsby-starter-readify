const path = require('path');
const moment = require('moment');
const siteConfig = require('./data/siteConfig');
const { kebabCase } = require('lodash');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node); // convert image paths for gatsby images

  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    let slug;
    let date;
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (parsedFilePath.dir === 'blog') {
      if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
          slug = `/${kebabCase(node.frontmatter.title)}`;
        }

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
          slug = `/${kebabCase(node.frontmatter.slug)}`;
        }

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
          date = moment(node.frontmatter.date, siteConfig.dateFromFormat);

          if (!date.isValid)
            console.warn(`WARNING: Invalid date.`, node.frontmatter);

          createNodeField({ node, name: 'date', value: date.toISOString() });
        }
      }

      createNodeField({ node, name: 'isBlogPost', value: true });
      createNodeField({ node, name: 'slug', value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');

  // Get a full list of markdown posts
  const allMarkdownQueryResult = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { isBlogPost: { eq: true } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
            }
          }
        }
      }
    }
  `);

  if (allMarkdownQueryResult.errors) {
    console.error(allMarkdownQueryResult.errors);
    throw allMarkdownQueryResult.errors;
  }

  const allPosts = allMarkdownQueryResult.data.allMarkdownRemark.edges;
  // console.log(
  //   `**************************${JSON.stringify(
  //     allPosts,
  //     null,
  //     '\t'
  //   )}*************************`
  // );

  // Sort posts
  allPosts.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // const { postsPerPage } = siteConfig;
  // const pageCount = Math.ceil(postsEdges.length / postsPerPage);

  // Post page creating
  allPosts.forEach((post, i) => {
    // Create post pages
    const nextID = i + 1 < allPosts.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : allPosts.length - 1;
    const nextPost = allPosts[nextID];
    const prevPost = allPosts[prevID];

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        nextTitle: nextPost.node.frontmatter.title,
        nextSlug: nextPost.node.fields.slug,
        prevTitle: prevPost.node.frontmatter.title,
        prevSlug: prevPost.node.fields.slug
      }
    });
  });
};
