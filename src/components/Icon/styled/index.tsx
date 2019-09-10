
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_6wfba7pz5h.eot?t=1567997753133'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_6wfba7pz5h.eot?t=1567997753133#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_6wfba7pz5h.woff?t=1567997753133') format('woff'),
  url('//at.alicdn.com/t/font_1236545_6wfba7pz5h.ttf?t=1567997753133') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_6wfba7pz5h.svg?t=1567997753133#iconfont') format('svg'); /* iOS 4.1- */
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

.hmly-icon-error:before {
  content: "\\e677";
}

.hmly-icon-success:before {
  content: "\\e678";
}

.hmly-icon-warning:before {
  content: "\\e679";
}


    `;

    export { StyledIcon }
    