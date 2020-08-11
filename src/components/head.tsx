import React from 'react';
import Helmet from 'react-helmet';
import { title, url, meta } from '@config/index';

const Head = () => (
  <Helmet>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{title}</title>
    <meta property="description" content={meta.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={meta.ogImage} />
    <meta property="og:image:width" content={meta.ogImageWidth} />
    <meta property="og:image:height" content={meta.ogImageHeight} />
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href={meta.favicon} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content={meta.themeColor} />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@400;500;700;900&family=Fira+Sans&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
);

export default Head;
