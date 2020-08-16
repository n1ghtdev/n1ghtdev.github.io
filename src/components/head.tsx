import React from 'react';
import Helmet from 'react-helmet';
import { title, siteUrl, meta } from '@config/index';

const Head = () => (
  <Helmet>
    <html lang="en" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{title}</title>
    <meta name="description" content={meta.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
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
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
);

export default Head;
