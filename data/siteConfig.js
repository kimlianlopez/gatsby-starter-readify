const config = {
  siteTitle: 'Gatsby Starter Readify', // Site title.
  siteTitleShort: 'Gatsby Readify', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Gatsby Starter Readify', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://gatsby-starter-readify.netlify.com', // Domain of your website without pathPrefix.
  siteAuthor: 'Kim Lian Lopez',
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A gatsby advance starter with advance SEO, Theming, and Netlify-CMS', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-153588035-2', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  // dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 3, // Amount of posts displayed per listing page.
  userEmail: 'kimlian.dev@gmail.com', // Email used for RSS feed's author segment
  // userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  // userLocation: 'North Pole, Earth', // User location to display in the author segment.
  authorAvatar: '/img/author-avatar.jpg', // User avatar to display in the author segment.
  // userDecription:
  // "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/kimlianlopez',
      imgSrc: '/img/github-logo.png',
      title: 'Open Source on GitHub'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/klianlopez96'
    },
    {
      label: 'Email',
      url: 'mailto:kimlian.dev@gmail.com'
    },
    {
      label: 'RSS',
      url: '/rss.xml',
      imgSrc: '/img/rss-logo.png',
      title: 'Open Source on GitHub'
    },
    {
      label: 'Netlify',
      url: 'https://netlify.com/',
      imgSrc: '/img/netlify-logo.png',
      title: 'Open Source on GitHub'
    },
    {
      label: 'Gatsby',
      url: 'https://gatsbyjs.org/',
      imgSrc: '/img/gatsby-logo.png',
      title: 'Open Source on GitHub'
    }
  ],
  copyright: 'Copyright © 2019. Kim Lian Lopez', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#4ab2b0', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff' // Used for setting manifest background color.
};

/** VALIDATE DATA **/

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

// // Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== '/')
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
