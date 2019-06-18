
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_vbclmjwrg0i.eot?t=1560844080389'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_vbclmjwrg0i.eot?t=1560844080389#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_vbclmjwrg0i.woff?t=1560844080389') format('woff'),
  url('//at.alicdn.com/t/font_1236545_vbclmjwrg0i.ttf?t=1560844080389') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_vbclmjwrg0i.svg?t=1560844080389#iconfont') format('svg'); /* iOS 4.1- */
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


    `;

    export { StyledIcon }
    