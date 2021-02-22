import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'A personal curriculum',
  title: 'Claudia',
  url: '',
  author: 'claudia',
  keywords: ['gatsby', 'site', 'curriculum'],
  img: '',
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
