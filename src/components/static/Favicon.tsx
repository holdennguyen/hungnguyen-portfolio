import React from 'react';

export default function Favicon() {
  return (
    <>
      <link href='/static/favicon/logo.ico' rel='shortcut icon' />
      <meta
        name='apple-mobile-web-app-title'
        content='Hung Nguyen Portfolio Website'
      />
      <meta name='application-name' content='Hung Nguyen Portfolio Website' />
      <meta name='msapplication-TileColor' content='#fff' />
      <meta name='theme-color' content='#fff' />
    </>
  );
}
