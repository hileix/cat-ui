
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_d4iatsmp9w4.eot?t=1567568820762'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_d4iatsmp9w4.eot?t=1567568820762#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_d4iatsmp9w4.woff?t=1567568820762') format('woff'),
  url('//at.alicdn.com/t/font_1236545_d4iatsmp9w4.ttf?t=1567568820762') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_d4iatsmp9w4.svg?t=1567568820762#iconfont') format('svg'); /* iOS 4.1- */
}

.hmly-icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hmly-icon-close:before {
  content: "\\e648";
}

.hmly-icon-down:before {
  content: "\\e649";
}

.hmly-icon-right:before {
  content: "\\e64a";
}

.hmly-icon-left:before {
  content: "\\e64b";
}

.hmly-icon-up:before {
  content: "\\e64c";
}

.hmly-icon-instagram:before {
  content: "\\e64d";
}

.hmly-icon-twitter:before {
  content: "\\e64e";
}

.hmly-icon-facebook:before {
  content: "\\e64f";
}

.hmly-icon-locked:before {
  content: "\\e650";
}

.hmly-icon-unlocked:before {
  content: "\\e651";
}

.hmly-icon-volume-low:before {
  content: "\\e652";
}

.hmly-icon-volume-high:before {
  content: "\\e653";
}

.hmly-icon-volume-muted:before {
  content: "\\e654";
}

.hmly-icon-loop-list:before {
  content: "\\e655";
}

.hmly-icon-loop-single:before {
  content: "\\e656";
}

.hmly-icon-shuffle:before {
  content: "\\e657";
}

.hmly-icon-question:before {
  content: "\\e658";
}

.hmly-icon-pause:before {
  content: "\\e659";
}

.hmly-icon-player-next:before {
  content: "\\e65a";
}

.hmly-icon-play:before {
  content: "\\e65b";
}

.hmly-icon-player-prev:before {
  content: "\\e65c";
}

.hmly-icon-sort-down:before {
  content: "\\e65d";
}

.hmly-icon-playlist:before {
  content: "\\e65e";
}

.hmly-icon-sort-up:before {
  content: "\\e65f";
}

.hmly-icon-share:before {
  content: "\\e660";
}

.hmly-icon-liked:before {
  content: "\\e661";
}

.hmly-icon-like:before {
  content: "\\e662";
}

.hmly-icon-visible:before {
  content: "\\e663";
}

.hmly-icon-invisible:before {
  content: "\\e664";
}

.hmly-icon-drag:before {
  content: "\\e665";
}

.hmly-icon-drag-mouse:before {
  content: "\\e666";
}

.hmly-icon-upload:before {
  content: "\\e667";
}

.hmly-icon-enter:before {
  content: "\\e668";
}

.hmly-icon-edit:before {
  content: "\\e669";
}

.hmly-icon-download:before {
  content: "\\e66a";
}

.hmly-icon-stats:before {
  content: "\\e66b";
}

.hmly-icon-delete:before {
  content: "\\e66c";
}

.hmly-icon-more:before {
  content: "\\e66d";
}

.hmly-icon-filter:before {
  content: "\\e66e";
}

.hmly-icon-people:before {
  content: "\\e66f";
}

.hmly-icon-disc:before {
  content: "\\e670";
}

.hmly-icon-forward:before {
  content: "\\e671";
}

.hmly-icon-backward:before {
  content: "\\e672";
}

.hmly-icon-decrease:before {
  content: "\\e673";
}

.hmly-icon-increase:before {
  content: "\\e674";
}

.hmly-icon-search:before {
  content: "\\e675";
}

.hmly-icon-add:before {
  content: "\\e676";
}


    `;

    export { StyledIcon }
    