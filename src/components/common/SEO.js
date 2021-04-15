import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'A dev tool to visualize data requests in React apps',
  title: 'React Fetch Tree',
  url: 'https://github.com/oslabs-beta/react-fetch-tree',
  author: 'React Fetch Tree team',
  keywords: [
    'react',
    'react fiber',
    'parser',
    'react suspense',
    'waterfall',
    'concurrent mode',
    'trevor carr',
    'cara dibdin',
    'james ferrell',
    'chris lung',
    'anika mustafiz',
  ],
  img: './images/react-fetch-tree.png',
  linkedInId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
