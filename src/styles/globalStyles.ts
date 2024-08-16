import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-Light';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-Thin';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard-Black';
    src: url('/fonts/Pretendard-Black.woff2') format('woff2');
  }
`;

export { globalStyles };
