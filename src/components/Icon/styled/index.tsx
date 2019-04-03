import { createGlobalStyle } from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('https://at.alicdn.com/t/font_569430_s6lrohkji6.eot'); /* IE9 */
    src: url('https://at.alicdn.com/t/font_569430_s6lrohkji6.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('https://at.alicdn.com/t/font_569430_s6lrohkji6.woff2') format('woff2'),
    url('https://at.alicdn.com/t/font_569430_s6lrohkji6.woff') format('woff'),
    url('https://at.alicdn.com/t/font_569430_s6lrohkji6.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('https://at.alicdn.com/t/font_569430_s6lrohkji6.svg#iconfont') format('svg'); /* iOS 4.1- */
  }

  .hmly-icon {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .hmly-icon-tw:before {
    content: "\e600";
  }

  .hmly-icon-fb:before {
    content: "\e601";
  }

  .hmly-icon-cp:before {
    content: "\e602";
  }

  .hmly-icon-red-check:before {
    content: "\e61a";
  }

  .hmly-icon-cp1:before {
    content: "\e603";
  }

  .hmly-icon-close:before {
    content: "\e61b";
  }

  .hmly-icon-question:before {
    content: "\e610";
  }

  .hmly-icon-share:before {
    content: "\e61c";
  }

  .hmly-icon-fb-white:before {
    content: "\e604";
  }

  .hmly-icon-backward:before {
    content: "\e611";
  }

  .hmly-icon-forward:before {
    content: "\e612";
  }

  .hmly-icon-ring:before {
    content: "\e613";
  }

  .hmly-icon-question-white:before {
    content: "\e614";
  }

  .hmly-icon-tw-white:before {
    content: "\e605";
  }

  .hmly-icon-ig-white:before {
    content: "\e606";
  }

  .hmly-icon-link-white:before {
    content: "\e607";
  }

  .hmly-icon-fb-black-box:before {
    content: "\e608";
  }

  .hmly-icon-ig-black:before {
    content: "\e609";
  }

  .hmly-icon-fb-black:before {
    content: "\e60a";
  }

  .hmly-icon-ig-black-box:before {
    content: "\e60b";
  }

  .hmly-icon-tw-black-box:before {
    content: "\e60c";
  }

  .hmly-icon-tw-black:before {
    content: "\e60d";
  }

  .hmly-icon-playing:before {
    content: "\e617";
  }

  .hmly-icon-paused:before {
    content: "\e618";
  }

  .hmly-icon-bookmark:before {
    content: "\e61d";
  }

  .hmly-icon-done-red:before {
    content: "\e615";
  }

  .hmly-icon-downing:before {
    content: "\e628";
  }

  .hmly-icon-collection:before {
    content: "\e61e";
  }

  .hmly-icon-arrow-up-down:before {
    content: "\e629";
  }

  .hmly-icon-download:before {
    content: "\e62a";
  }

  .hmly-icon-edit:before {
    content: "\e61f";
  }

  .hmly-icon-like:before {
    content: "\e60e";
  }

  .hmly-icon-share-arrow:before {
    content: "\e620";
  }

  .hmly-icon-search:before {
    content: "\e616";
  }

  .hmly-icon-trending:before {
    content: "\e622";
  }

  .hmly-icon-stats:before {
    content: "\e623";
  }

  .hmly-icon-rubbish-cabin:before {
    content: "\e624";
  }

  .hmly-icon-share-dot:before {
    content: "\e625";
  }

  .hmly-icon-edit1:before {
    content: "\e626";
  }

  .hmly-icon-like1:before {
    content: "\e60f";
  }

  .hmly-icon-arrow-up:before {
    content: "\e62b";
  }

  .hmly-icon-arrow-down:before {
    content: "\e62c";
  }

  .hmly-icon-upload:before {
    content: "\e627";
  }

  .hmly-icon-three-dot:before {
    content: "\e621";
  }

  .hmly-icon-dash:before {
    content: "\e62d";
  }

  .hmly-icon-warning:before {
    content: "\e62e";
  }

`;

export { StyledIcon }