import { createGlobalStyle } from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledIcon = createGlobalStyle`
  @font-face {
    font-family: 'Himalaya';  /* project id 1121757 */
    src: url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.eot');
    src: url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.woff') format('woff'),
    url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1121757_op71kwh1zdb.svg#Himalaya') format('svg');
  }

  .hmly-icon {
    font-family: "Himalaya" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .hmly-icon-question-circle:before {
    content: "\\e620";
  }

  .hmly-icon-question:before {
    content: "\\e61f";
  }

  .hmly-icon-share3:before {
    content: "\\e61e";
  }

  .hmly-icon-share2:before {
    content: "\\e61d";
  }

  .hmly-icon-share1:before {
    content: "\\e61c";
  }

  .hmly-icon-more:before {
    content: "\\e621";
  }

  .hmly-icon-stats:before {
    content: "\\e61a";
  }

  .hmly-icon-forward:before {
    content: "\\e619";
  }

  .hmly-icon-backward:before {
    content: "\\e618";
  }

  .hmly-icon-ins:before {
    content: "\\e617";
  }

  .hmly-icon-twitter:before {
    content: "\\e616";
  }

  .hmly-icon-facebook:before {
    content: "\\e615";
  }

  .hmly-icon-crown:before {
    content: "\\e614";
  }

  .hmly-icon-early-access:before {
    content: "\\e613";
  }

  .hmly-icon-hi-circle:before {
    content: "\\e612";
  }

  .hmly-icon-ad-free:before {
    content: "\\e611";
  }

  .hmly-icon-close:before {
    content: "\\e610";
  }

  .hmly-icon-upload:before {
    content: "\\e627";
  }

  .hmly-icon-delete:before {
    content: "\\e626";
  }

  .hmly-icon-edit:before {
    content: "\\e625";
  }

  .hmly-icon-up:before {
    content: "\\e624";
  }

  .hmly-icon-download:before {
    content: "\\e623";
  }

  .hmly-icon-process:before {
    content: "\\e622";
  }

  .hmly-icon-filter:before {
    content: "\\e62a";
  }
`;

export { StyledIcon }
