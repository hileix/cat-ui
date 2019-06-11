
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_jmuw9sfqs2.eot?t=1560241325007'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_jmuw9sfqs2.eot?t=1560241325007#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_jmuw9sfqs2.woff?t=1560241325007') format('woff'),
  url('//at.alicdn.com/t/font_1236545_jmuw9sfqs2.ttf?t=1560241325007') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_jmuw9sfqs2.svg?t=1560241325007#iconfont') format('svg'); /* iOS 4.1- */
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


    `;

    export { StyledIcon }
    