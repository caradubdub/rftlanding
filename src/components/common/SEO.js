import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Landing page for React Fetch Tree',
  title: 'React Fetch Tree',
  url: 'https://github.com/oslabs-beta/react-fetch-tree',
  author: 'React Fetch Tree team',
  keywords: ['react', 'react fiber', 'parser', 'react suspense', 'waterfall', 'concurrent mode'],
  img: './images/react-fetch-tree.png',
  linkedInId: ''
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.linkedInId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />


      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
