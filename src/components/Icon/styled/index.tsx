
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_fv03psrd3pw.eot?t=1567481727303'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_fv03psrd3pw.eot?t=1567481727303#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_fv03psrd3pw.woff?t=1567481727303') format('woff'),
  url('//at.alicdn.com/t/font_1236545_fv03psrd3pw.ttf?t=1567481727303') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_fv03psrd3pw.svg?t=1567481727303#iconfont') format('svg'); /* iOS 4.1- */
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
    