import React from 'react';
import Helmet from 'react-helmet';
import { TITLE, SITE_URL, META } from '@utils/config';

const Head = () => (
  <Helmet>
    <html lang="en" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{TITLE}</title>
    <meta name="description" content={META.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:image" content={META.ogImage} />
    <meta property="og:image:width" content={META.ogImageWidth} />
    <meta property="og:image:height" content={META.ogImageHeight} />
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href={META.favicon} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content={META.themeColor} />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
);

export default Head;
