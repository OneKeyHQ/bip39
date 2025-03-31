document
  .getElementById("onekey-portal-footer")
  .attachShadow({ mode: "open" }).innerHTML = `
<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>
<meta name="generator" content="Gatsby 5.14.1" />
<meta data-react-helmet="true" name="robots" content="noindex" />
<style
  data-href="/styles.e51167fb7937e5bac24a.css"
  integrity="sha512-lTIPS2zHl/I93fxcLw7ZNvR6afetvn5v6m+pajesVRZuIMsHL0qW3PU+ObGn86EWtnHqWQaNLkBPzaUBOcR6dw=="
  crossorigin="anonymous"
  data-identity="gatsby-global-css"
>
  :root {
    --column-size-1: 200px;
    --swiper-theme-color: #007aff;
  }
  @font-face {
    font-family: swiper-icons;
    font-style: normal;
    font-weight: 400;
    src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA");
  }
  .swiper {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 1;
  }
  .swiper-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    box-sizing: content-box;
    display: flex;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;
    z-index: 1;
  }
  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translateZ(0);
  }
  .swiper-pointer-events {
    touch-action: pan-y;
  }
  .swiper-pointer-events.swiper-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  .swiper-autoheight,
  .swiper-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }
  .swiper-backface-hidden .swiper-slide {
    backface-visibility: hidden;
    transform: translateZ(0);
  }
  .swiper-3d,
  .swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px;
  }
  .swiper-3d .swiper-cube-shadow,
  .swiper-3d .swiper-slide,
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top,
  .swiper-3d .swiper-wrapper {
    transform-style: preserve-3d;
  }
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top {
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .swiper-3d .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.15);
  }
  .swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
  }
  .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent);
  }
  .swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
  }
  .swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);
  }
  .swiper-css-mode > .swiper-wrapper {
    -ms-overflow-style: none;
    overflow: auto;
    scrollbar-width: none;
  }
  .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-horizontal.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-vertical.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  .swiper-centered > .swiper-wrapper:before {
    content: "";
    flex-shrink: 0;
    order: 9999;
  }
  .swiper-centered.swiper-horizontal
    > .swiper-wrapper
    > .swiper-slide:first-child {
    margin-inline-start: var(--swiper-centered-offset-before);
  }
  .swiper-centered.swiper-horizontal > .swiper-wrapper:before {
    height: 100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after);
  }
  .swiper-centered.swiper-vertical
    > .swiper-wrapper
    > .swiper-slide:first-child {
    margin-block-start: var(--swiper-centered-offset-before);
  }
  .swiper-centered.swiper-vertical > .swiper-wrapper:before {
    height: var(--swiper-centered-offset-after);
    min-width: 1px;
    width: 100%;
  }
  .swiper-centered > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop: always;
  }
  .swiper-free-mode > .swiper-wrapper {
    margin: 0 auto;
    transition-timing-function: ease-out;
  }
  .swiper-scrollbar {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
  }
  .swiper-scrollbar-disabled > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-disabled {
    display: none !important;
  }
  .swiper-horizontal > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-horizontal {
    bottom: 3px;
    height: 5px;
    left: 1%;
    position: absolute;
    width: 98%;
    z-index: 50;
  }
  .swiper-scrollbar.swiper-scrollbar-vertical,
  .swiper-vertical > .swiper-scrollbar {
    height: 98%;
    position: absolute;
    right: 3px;
    top: 1%;
    width: 5px;
    z-index: 50;
  }
  .swiper-scrollbar-drag {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
  }
  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }
  .swiper-scrollbar-lock {
    display: none;
  }
  .DialogOverlay {
    animation: overlayShow 0.15s cubic-bezier(0.16, 1, 0.3, 1);
    background-color: rgba(0, 0, 0, 0.24);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
  }
  .DialogContent {
    animation: contentShow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    background-color: #fff;
    border-radius: 40px;
    bottom: 8px;
    left: 8px;
    outline: none;
    overflow: hidden;
    position: fixed;
    right: 8px;
    top: 8px;
    transform: translate(0);
    z-index: 1000000;
  }
  @media (min-width: 960px) {
    .DialogContent {
      height: 90vh;
      left: 50%;
      max-height: 960px;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 860px;
    }
  }
  @media (min-width: 1200px) {
    .DialogContent {
      width: 80vw;
    }
  }
  @keyframes overlayShow {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes contentShow {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  svg {
    display: block;
  }
  a {
    color: #3a49cf;
    text-decoration: none;
  }
  a:hover {
    color: #16d629;
  }
  body {
    font-feature-settings: "ss04";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #393c4e;
    font-family: Stabil Grotesk, system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  ul {
    list-style: disc outside;
    margin-left: 20px;
  }
  ol {
    list-style: decimal outside;
    margin-left: 24px;
  }
  video {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
  }
  .visuallyhidden {
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    clip-path: inset(0 0 99.9% 99.9%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  #content h1,
  #content h2,
  #content h3,
  #content h4,
  #content h5,
  #content h6 {
    color: #080b22;
    margin-top: 32px;
  }
  #content h1 {
    font-size: 32px;
  }
  #content h2 {
    font-size: 24px;
  }
  #content h3 {
    font-size: 20px;
  }
  #content h4,
  #content h5,
  #content h6 {
    font-size: 18px;
  }
  #content ol,
  #content p,
  #content ul {
    margin-top: 24px;
  }
  #content li {
    margin-top: 16px;
  }
  #content li::marker {
    color: #3a49cf;
  }
  #content img {
    height: auto;
    max-width: 100%;
  }
  #content video {
    height: auto;
    width: 100%;
  }
  #content blockquote {
    border-left: 3px solid #3a49cf;
    color: #6b6d7a;
    font-size: 20px;
    margin: 40px 0;
    padding-left: 20px;
  }
  #content .tableWrap {
    overflow: auto;
    width: 100%;
  }
  #content table {
    border: 1px solid #eee;
    border-collapse: collapse;
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
    min-width: 640px;
    text-align: left;
    width: 100%;
  }
  #content table thead {
    background-color: #f7f7fb;
  }
  #content table td,
  #content table th {
    border: 1px solid #eee;
    padding: 16px 24px;
  }
  #content table ::-webkit-scrollbar {
    background-color: #ececec;
    border-radius: 5px;
    height: 10px;
  }
  #content table ::-webkit-scrollbar-track {
    background: transparent;
  }
  #content table ::-webkit-scrollbar-thumb {
    background-color: #ceced3;
    border-radius: 5px;
  }
  #buorg {
    font-family: Inter, sans-serif;
  }
  #buorg .buorg-pad {
    padding: 24px;
  }
  #buorg .buorg-buttons {
    margin-top: 8px;
  }
  #buorg #buorgig,
  #buorg #buorgpermanent,
  #buorg #buorgul {
    box-shadow: none;
    margin: 0 8px;
  }
  div#stats {
    height: 100px;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    -webkit-user-select: none;
    user-select: none;
    width: 200px;
    z-index: 50000000;
  }
  .text-container-color {
    color: #f2f2f2;
  }
  .text-container-position {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .navigation-normal {
    display: none;
  }
  @media (min-width: 845px) {
    .navigation-normal {
      display: block;
    }
  }
  .navigation-mobile {
    display: block;
  }
  @media (min-width: 845px) {
    .navigation-mobile {
      display: none;
    }
  }
  .cooperative-products-section-scrollbar {
    background: #dadee1;
    height: 3;
  }
  .cooperative-products-section-scrollbar .swiper-scrollbar-drag {
    background: #101111 !important;
    border-radius: 0 !important;
  }
  .brands-examples-section-scrollbar {
    background: hsla(0, 0%, 100%, 0.16);
    height: 1px;
    overflow: hidden;
  }
  .brands-examples-section-scrollbar .swiper-scrollbar-drag {
    background: #fff !important;
    border-radius: 0 !important;
  }
</style>
<title data-react-helmet="true">
  OneKey Wallet | All-in-one crypto wallet trusted by millions.
</title>
<link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />
<link
  rel="icon"
  href="/favicon-32x32.png?v=d5bfede322de37acb768e4cc259716f3"
  type="image/png"
/>
<link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
<link
  rel="apple-touch-icon"
  sizes="192x192"
  href="/icon/android-chrome-192x192.png?v=d5bfede322de37acb768e4cc259716f3"
/>
<link
  rel="apple-touch-icon"
  sizes="512x512"
  href="/icon/android-chrome-512x512.png?v=d5bfede322de37acb768e4cc259716f3"
/>
<style>
  .gatsby-image-wrapper {
    position: relative;
    overflow: hidden;
  }
  .gatsby-image-wrapper picture.object-fit-polyfill {
    position: static !important;
  }
  .gatsby-image-wrapper img {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
  }
  .gatsby-image-wrapper [data-main-image] {
    opacity: 0;
    transform: translateZ(0);
    transition: opacity 0.25s linear;
    will-change: opacity;
  }
  .gatsby-image-wrapper-constrained {
    display: inline-block;
    vertical-align: top;
  }
</style>
<noscript>
  <style>
    .gatsby-image-wrapper noscript [data-main-image] {
      opacity: 1 !important;
    }
    .gatsby-image-wrapper [data-placeholder-image] {
      opacity: 0 !important;
    }
  </style>
</noscript>
<div id="___gatsby">
  <style data-emotion="css-global yt8nca">
    @font-face {
      font-family: "Stabil Grotesk";
      font-display: block;
      font-weight: 400;
      font-style: normal;
      src: url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Light.woff2")
          format("woff2"),
        url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Light.woff")
          format("woff");
    }
    @font-face {
      font-family: "Stabil Grotesk";
      font-display: block;
      font-weight: 500;
      font-style: normal;
      src: url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Regular.woff2")
          format("woff2"),
        url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Regular.woff")
          format("woff");
    }
    @font-face {
      font-family: "Stabil Grotesk";
      font-display: block;
      font-weight: 600;
      font-style: normal;
      src: url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Medium.woff2")
          format("woff2"),
        url("https://asset.onekey-asset.com/portal/d286599179739ee6a929edbb26902b7d25dcbb47/fonts/StabilGrotesk/StabilGrotesk-Medium.woff")
          format("woff");
    }
  </style>
  <div style="outline: none" tabindex="-1" id="gatsby-focus-wrapper">
    <div>
      <style data-emotion="css 1px0y8z">
        .css-1px0y8z {
          background-color: #101111;
          border-top-left-radius: 64px;
          border-top-right-radius: 64px;
        }
        @media (min-width: 960px) {
          .css-1px0y8z {
            padding-top: 88px;
            padding-bottom: 138px;
          }
        }
      </style>
      <footer class="css-1px0y8z">
        <style data-emotion="css 1wlhhb3-Container">
          .css-1wlhhb3-Container {
            margin: 0 auto;
            max-width: 100%;
            padding-left: 24px;
            padding-right: 24px;
          }
          @media (min-width: 414px) {
            .css-1wlhhb3-Container {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (min-width: 960px) {
            .css-1wlhhb3-Container {
              padding-left: 0;
              padding-right: 0;
              max-width: 896px;
            }
          }
          @media (min-width: 1200px) {
            .css-1wlhhb3-Container {
              max-width: 1124px;
            }
          }
          @media (min-width: 1440px) {
            .css-1wlhhb3-Container {
              max-width: 1312px;
            }
          }
          @media (min-width: 1920px) {
            .css-1wlhhb3-Container {
              max-width: 1552px;
            }
          }
        </style>
        <div class="css-1wlhhb3-Container">
          <style data-emotion="css 9gfqgf">
            .css-9gfqgf {
              display: block;
            }
            @media (min-width: 960px) {
              .css-9gfqgf {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                justify-content: space-between;
              }
            }
          </style>
          <div class="css-9gfqgf">
            <style data-emotion="css 11r7lom">
              .css-11r7lom {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
              }
              @media (min-width: 960px) {
                .css-11r7lom {
                  -webkit-box-pack: justify;
                  -webkit-justify-content: space-between;
                  justify-content: space-between;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                }
              }
            </style>
            <div class="css-11r7lom">
              <style data-emotion="css 1r2o1rm">
                .css-1r2o1rm {
                  padding: 40px 12px;
                }
                @media (min-width: 960px) {
                  .css-1r2o1rm {
                    padding: 0;
                  }
                }
              </style>
              <div class="css-1r2o1rm">
                <svg
                  width="233"
                  height="57"
                  viewBox="0 0 233 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5249_15085)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.2938 56.0387C46.1362 56.0387 54.5875 47.5873 54.5875 28.7449C54.5875 9.90254 46.1362 1.45117 27.2938 1.45117C8.45136 1.45117 0 9.90254 0 28.7449C0 47.5873 8.45136 56.0387 27.2938 56.0387ZM22.1694 13.0242H29.7624V25.5366H25.0547V17.0521H20.8373L22.1694 13.0242ZM27.2962 44.4646C32.0787 44.4646 35.9556 40.5876 35.9556 35.8052C35.9556 31.0227 32.0787 27.1458 27.2962 27.1458C22.5137 27.1458 18.6367 31.0227 18.6367 35.8052C18.6367 40.5876 22.5137 44.4646 27.2962 44.4646ZM27.2961 40.5334C29.9075 40.5334 32.0243 38.4165 32.0243 35.8052C32.0243 33.1939 29.9075 31.077 27.2961 31.077C24.6849 31.077 22.568 33.1939 22.568 35.8052C22.568 38.4165 24.6849 40.5334 27.2961 40.5334Z"
                      fill="white"
                    ></path>
                  </g>
                  <path
                    d="M76.1511 41.4545C82.8071 41.4545 87.7031 36.4625 87.7031 29.6145C87.7031 22.7665 82.8071 17.7745 76.1511 17.7745C69.4951 17.7745 64.5991 22.7665 64.5991 29.6145C64.5991 36.4625 69.4951 41.4545 76.1511 41.4545ZM68.8231 29.6145C68.8231 24.8785 71.9271 21.4545 76.1511 21.4545C80.4071 21.4545 83.4791 24.8785 83.4791 29.6145C83.4791 34.2865 80.4071 37.7425 76.1511 37.7425C71.9271 37.7425 68.8231 34.2865 68.8231 29.6145ZM90.8216 40.8145H94.7896V32.2065C94.7896 29.2305 96.0696 27.5345 98.3416 27.5345C100.454 27.5345 101.638 29.0065 101.638 31.5025V40.8145H105.606V30.8945C105.606 26.9265 103.27 24.3345 99.7816 24.3345C97.1896 24.3345 95.3976 25.7745 94.6936 28.1425L94.7896 24.7185H90.8216V40.8145ZM116.534 41.3905C120.438 41.3905 123.382 39.0545 124.022 36.0785L120.63 35.5665C120.086 37.1985 118.486 38.2865 116.566 38.2865C114.134 38.2865 112.374 36.4625 112.246 33.9665H124.31C125.014 28.9425 122.038 24.1425 116.47 24.1425C111.702 24.1425 108.246 27.7585 108.246 32.7505C108.246 37.7745 111.702 41.3905 116.534 41.3905ZM112.278 30.9905C112.566 28.6865 114.262 27.1185 116.47 27.1185C118.838 27.1185 120.47 28.8465 120.47 30.9905H112.278ZM127.358 40.8145H131.422V34.0945L134.974 30.2865L141.95 40.8145H146.686L137.63 27.4705L146.046 18.4145H140.958L131.422 28.8465V18.4145H127.358V40.8145ZM155.503 41.3905C159.407 41.3905 162.351 39.0545 162.991 36.0785L159.599 35.5665C159.055 37.1985 157.455 38.2865 155.535 38.2865C153.103 38.2865 151.343 36.4625 151.215 33.9665H163.279C163.983 28.9425 161.007 24.1425 155.439 24.1425C150.671 24.1425 147.215 27.7585 147.215 32.7505C147.215 37.7745 150.671 41.3905 155.503 41.3905ZM151.247 30.9905C151.535 28.6865 153.231 27.1185 155.439 27.1185C157.807 27.1185 159.439 28.8465 159.439 30.9905H151.247ZM167.792 46.8945H171.888L181.392 24.7185H177.296L172.72 35.8225L168.144 24.7185H163.952L170.64 40.3665L167.792 46.8945Z"
                    fill="white"
                  ></path>
                  <defs>
                    <clipPath id="clip0_5249_15085">
                      <rect
                        width="54.5875"
                        height="54.5875"
                        fill="white"
                        transform="translate(0 1.45117)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <style data-emotion="css bso4ht">
                  .css-bso4ht {
                    margin-top: 6px;
                  }
                  @media (min-width: 960px) {
                    .css-bso4ht {
                      margin-top: 12px;
                    }
                  }
                </style>
                <div class="css-bso4ht">
                  <style data-emotion="css qsecyr">
                    .css-qsecyr {
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 14px;
                      color: #9c9da7;
                    }
                  </style>
                  <style data-emotion="css 1xd29dq">
                    .css-1xd29dq {
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 14px;
                      color: #9c9da7;
                    }
                  </style>
                  <span class="css-1xd29dq">
                    a member of
                    <style data-emotion="css d59fcq">
                      .css-d59fcq {
                        color: #ffffff;
                      }
                    </style>
                    <span class="css-d59fcq">SatoKey Group</span>
                  </span>
                </div>
              </div>
              <style data-emotion="css 12rl58b">
                .css-12rl58b {
                  display: none;
                }
                @media (min-width: 414px) {
                  .css-12rl58b {
                    display: none;
                  }
                }
                @media (min-width: 960px) {
                  .css-12rl58b {
                    display: block;
                  }
                }
                @media (min-width: 1200px) {
                  .css-12rl58b {
                    display: block;
                  }
                }
                @media (min-width: 1440px) {
                  .css-12rl58b {
                    display: block;
                  }
                }
                @media (min-width: 1920px) {
                  .css-12rl58b {
                    display: block;
                  }
                }
              </style>
              <div class="css-12rl58b">
                <style data-emotion="css 1u2xdtf">
                  .css-1u2xdtf {
                    padding-top: 20px;
                    padding-bottom: 80px;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    gap: 24px;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                  }
                  @media (min-width: 960px) {
                    .css-1u2xdtf {
                      padding: 0;
                      padding-bottom: 0;
                      padding-right: 20px;
                    }
                  }
                </style>
                <div class="css-1u2xdtf">
                  <style data-emotion="css o5snkh">
                    .css-o5snkh {
                      gap: 24px;
                      -webkit-align-items: center;
                      -webkit-box-align: center;
                      -ms-flex-align: center;
                      align-items: center;
                      color: #ffffff;
                    }
                    .css-o5snkh svg:hover {
                      opacity: 0.8;
                    }
                  </style>
                  <style data-emotion="css 1sqqwpe">
                    .css-1sqqwpe {
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      gap: 24px;
                      -webkit-align-items: center;
                      -webkit-box-align: center;
                      -ms-flex-align: center;
                      align-items: center;
                      color: #ffffff;
                    }
                    .css-1sqqwpe svg:hover {
                      opacity: 0.8;
                    }
                  </style>
                  <div class="css-1sqqwpe">
                    <style data-emotion="css zm3qx2">
                      .css-zm3qx2 {
                        color: #ffffff;
                      }
                    </style>
                    <style data-emotion="css 1cmwfgr">
                      .css-1cmwfgr {
                        color: #ffffff;
                      }
                    </style>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/OneKeyHQ"
                      class="css-1cmwfgr"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M24.052 3.25h4.293l-9.38 10.72L30 28.56h-8.64l-6.768-8.848-7.743 8.847H2.553l10.033-11.467L2 3.25h8.86l6.117 8.087 7.075-8.087Zm-1.507 22.74h2.379L9.567 5.684H7.014l15.53 20.305Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/OneKeyHQ/"
                      class="css-1cmwfgr"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M16 2C8.265 2 2 8.265 2 16c0 6.195 4.008 11.427 9.572 13.282.7.123.963-.297.963-.665 0-.332-.018-1.434-.018-2.607-3.517.647-4.427-.858-4.707-1.645-.157-.402-.84-1.645-1.435-1.977-.49-.263-1.19-.91-.018-.928 1.103-.018 1.89 1.015 2.153 1.435 1.26 2.117 3.273 1.523 4.078 1.155.122-.91.49-1.523.892-1.873-3.115-.35-6.37-1.557-6.37-6.912 0-1.523.542-2.783 1.435-3.763-.14-.35-.63-1.785.14-3.71 0 0 1.172-.367 3.85 1.435a12.99 12.99 0 0 1 3.5-.472c1.19 0 2.38.157 3.5.472 2.677-1.82 3.85-1.434 3.85-1.434.77 1.924.28 3.36.14 3.71.893.98 1.435 2.222 1.435 3.762 0 5.372-3.273 6.563-6.387 6.912.507.438.944 1.278.944 2.59 0 1.873-.017 3.378-.017 3.85 0 .368.262.805.962.665A14.022 14.022 0 0 0 30 16c0-7.735-6.265-14-14-14Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://blog.onekey.so"
                      class="css-1cmwfgr"
                    >
                      <svg
                        viewBox="0 0 1043.63 592.71"
                        class="medium_svg__au medium_svg__av"
                        width="32"
                        height="32"
                      >
                        <g data-name="Layer 2">
                          <path
                            fill="currentColor"
                            d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36m322.89 0c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279m132.08 0c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                            data-name="Layer 1"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/OneKeyHQ"
                    class="css-nqgj01"
                  >
                    <svg
                      width="87"
                      height="34"
                      viewBox="0 0 87 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          d="M44.767 16.3732C47.1441 16.3732 48.8719 14.5793 48.8719 12.3894V12.3674C48.8719 10.1773 47.1661 8.40552 44.7891 8.40552C42.4119 8.40552 40.6842 10.1993 40.6842 12.3894V12.4113C40.6842 14.6014 42.39 16.3732 44.767 16.3732ZM44.7891 14.8105C43.4244 14.8105 42.456 13.71 42.456 12.3894V12.3674C42.456 11.0468 43.4024 9.96826 44.767 9.96826C46.1317 9.96826 47.1001 11.0687 47.1001 12.3894V12.4113C47.1001 13.732 46.1537 14.8105 44.7891 14.8105ZM50.1552 16.2412H51.85V13.93H53.1375C54.8654 13.93 56.252 13.0057 56.252 11.2229V11.2008C56.252 9.62706 55.1405 8.53757 53.3026 8.53757H50.1552V16.2412ZM51.85 12.4223V10.0673H53.1596C54.007 10.0673 54.5352 10.4745 54.5352 11.2339V11.2558C54.5352 11.9161 54.04 12.4223 53.1926 12.4223H51.85ZM57.2861 16.2412H63.1518V14.7334H58.9698V13.1157H62.6016V11.608H58.9698V10.0453H63.0967V8.53757H57.2861V16.2412ZM64.4385 16.2412H66.1114V11.3438L69.8421 16.2412H71.2838V8.53757H69.611V13.2808L66.0012 8.53757H64.4385V16.2412ZM43.7655 26.5973C45.4274 26.5973 46.5939 25.7389 46.5939 24.2092V24.1872C46.5939 22.8445 45.7134 22.2833 44.1508 21.8761C42.8192 21.5349 42.489 21.3698 42.489 20.8636V20.8416C42.489 20.4674 42.8302 20.1703 43.4794 20.1703C44.1287 20.1703 44.8001 20.4565 45.4823 20.9296L46.3627 19.6531C45.5814 19.0258 44.624 18.6736 43.5014 18.6736C41.9277 18.6736 40.8052 19.598 40.8052 20.9957V21.0177C40.8052 22.5474 41.8067 22.9766 43.3584 23.3728C44.6459 23.7029 44.9101 23.923 44.9101 24.3522V24.3743C44.9101 24.8255 44.4919 25.1006 43.7986 25.1006C42.9182 25.1006 42.1919 24.7374 41.4985 24.1651L40.4971 25.3647C41.4215 26.1901 42.599 26.5973 43.7655 26.5973ZM51.5863 26.6193C53.9633 26.6193 55.6911 24.8255 55.6911 22.6354V22.6134C55.6911 20.4234 53.9854 18.6516 51.6082 18.6516C49.2312 18.6516 47.5033 20.4455 47.5033 22.6354V22.6575C47.5033 24.8475 49.2091 26.6193 51.5863 26.6193ZM51.6082 25.0565C50.2436 25.0565 49.2751 23.956 49.2751 22.6354V22.6134C49.2751 21.2928 50.2216 20.2143 51.5863 20.2143C52.9508 20.2143 53.9193 21.3148 53.9193 22.6354V22.6575C53.9193 23.978 52.9729 25.0565 51.6082 25.0565ZM60.1879 26.6083C62.2568 26.6083 63.5664 25.4638 63.5664 23.1307V18.7837H61.8716V23.1967C61.8716 24.4182 61.2443 25.0455 60.2099 25.0455C59.1754 25.0455 58.5481 24.3963 58.5481 23.1417V18.7837H56.8533V23.1857C56.8533 25.4528 58.1189 26.6083 60.1879 26.6083ZM65.0726 26.4872H66.7674V24.0221H68.099L69.7498 26.4872H71.7307L69.8488 23.736C70.8283 23.3728 71.4995 22.5914 71.4995 21.3479V21.3259C71.4995 20.5995 71.2685 19.9943 70.8392 19.565C70.333 19.0588 69.5737 18.7837 68.5942 18.7837H65.0726V26.4872ZM66.7674 22.5254V20.3134H68.4511C69.2765 20.3134 69.7827 20.6875 69.7827 21.4139V21.4359C69.7827 22.0852 69.3096 22.5254 68.4842 22.5254H66.7674ZM76.415 26.6193C77.9007 26.6193 78.7813 26.0911 79.5735 25.2436L78.4949 24.1541C77.8897 24.7044 77.3504 25.0565 76.4701 25.0565C75.1495 25.0565 74.236 23.956 74.236 22.6354V22.6134C74.236 21.2928 75.1714 20.2143 76.4701 20.2143C77.2404 20.2143 77.8457 20.5445 78.44 21.0837L79.5186 19.8401C78.8033 19.1358 77.9337 18.6516 76.4811 18.6516C74.1149 18.6516 72.4642 20.4455 72.4642 22.6354V22.6575C72.4642 24.8694 74.148 26.6193 76.415 26.6193ZM80.7103 26.4872H86.5758V24.9795H82.3936V23.3618H86.0255V21.8541H82.3936V20.2913H86.5209V18.7837H80.7103V26.4872Z"
                          fill="white"
                        ></path>
                        <path
                          d="M19.6321 23.1003C22.0127 22.2161 23.2555 20.5133 23.2555 17.5827C23.2555 14.6521 20.7859 12.0697 17.7002 12.0646C14.444 12.0593 11.9877 14.6413 12.0269 17.5827C12.0662 20.5239 13.4688 22.4807 15.714 23.1883L11.7369 32.9726C6.41385 31.5945 1 25.3149 1 17.5827C1 8.42432 8.35885 1 17.5822 1C26.8055 1 34.2825 8.42432 34.2825 17.5827C34.2825 25.4352 28.9199 31.6273 23.4833 33L19.6321 23.1003Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <style data-emotion="css 1c1dj2u">
                    .css-1c1dj2u {
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 14px;
                      color: #ffffff99;
                    }
                  </style>
                  <span class="css-1c1dj2u">
                    Since 2019 to Now ｜ OneKey Limited All Rights Reserved
                  </span>
                </div>
              </div>
            </div>
            <style data-emotion="css t8iczu">
              .css-t8iczu {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                max-width: 1100px;
              }
            </style>
            <div class="css-t8iczu">
              <style data-emotion="css ld45sj">
                .css-ld45sj {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-flex-wrap: wrap;
                  -webkit-flex-wrap: wrap;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  -webkit-box-pack: start;
                  -ms-flex-pack: start;
                  -webkit-justify-content: flex-start;
                  justify-content: flex-start;
                }
                @media (min-width: 1440px) {
                  .css-ld45sj {
                    gap: 16px;
                  }
                }
              </style>
              <div class="css-ld45sj">
                <style data-emotion="css ahi0zd">
                  .css-ahi0zd {
                    width: 100%;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    padding-bottom: 48px;
                    gap: 32px;
                  }
                  @media (min-width: 414px) {
                    .css-ahi0zd {
                      width: 50%;
                    }
                  }
                  @media (min-width: 960px) {
                    .css-ahi0zd {
                      width: 33.3%;
                      padding-bottom: 80px;
                    }
                  }
                  @media (min-width: 1200px) {
                    .css-ahi0zd {
                      width: 20%;
                    }
                    .css-ahi0zd:last-child {
                      padding-right: 0;
                    }
                  }
                  @media (min-width: 1440px) {
                    .css-ahi0zd {
                      width: 18.5%;
                      padding-bottom: 64px;
                    }
                  }
                </style>
                <div class="css-ahi0zd">
                  <style data-emotion="css 1ck57u9">
                    .css-1ck57u9 {
                      font-weight: 600;
                      font-size: 14px;
                      line-height: 17px;
                      color: #ffffff;
                      opacity: 0.6;
                    }
                    .css-1ck57u9:first-letter {
                      text-transform: uppercase;
                    }
                  </style>
                  <style data-emotion="css afrhei">
                    .css-afrhei {
                      font-weight: 600;
                      font-size: 14px;
                      line-height: 17px;
                      color: #ffffff;
                      opacity: 0.6;
                    }
                    .css-afrhei:first-letter {
                      text-transform: uppercase;
                    }
                  </style>
                  <span class="css-afrhei">Products</span>
                  <style data-emotion="css 1mh49xg">
                    .css-1mh49xg {
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-flex-direction: column;
                      -ms-flex-direction: column;
                      flex-direction: column;
                      gap: 12px;
                    }
                    @media (min-width: 414px) {
                      .css-1mh49xg {
                        gap: 16px;
                      }
                    }
                  </style>
                  <div class="css-1mh49xg">
                    <style data-emotion="css 3c30ma">
                      .css-3c30ma {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        color: #ffffff;
                      }
                      .css-3c30ma:first-letter {
                        text-transform: uppercase;
                      }
                    </style>
                    <style data-emotion="css j6mzqe">
                      .css-j6mzqe {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        color: #ffffff;
                      }
                      .css-j6mzqe:first-letter {
                        text-transform: uppercase;
                      }
                    </style>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/products/onekey-pro-hardware-wallet/"
                      class="css-j6mzqe"
                    >
                      OneKey Pro
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/products/onekey-classic-1s-hardware-wallet/"
                      class="css-j6mzqe"
                    >
                      OneKey Classic 1S
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/products/onekey-lite-hardware-wallet/"
                      class="css-j6mzqe"
                    >
                      OneKey Lite
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/products/onekey-mini-hardware-wallet/"
                      class="css-j6mzqe"
                    >
                      OneKey Mini
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/shop"
                      class="css-j6mzqe"
                    >
                      View All Products
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Global shop</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://shop.onekey.so"
                      class="css-j6mzqe"
                    >
                      Global shop
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.amazon.co.jp/stores/OneKey/page/A5D41D1F-05BA-4F0E-AAD6-02CED98C7A30"
                      class="css-j6mzqe"
                    >
                      Amazon Japan
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.amazon.com/stores/OneKey/page/4A384DC3-FA14-4173-AF75-B6B202C6662A"
                      class="css-j6mzqe"
                    >
                      Amazon U.S., Canada &amp; Mexico
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.amazon.de/-/en/stores/OneKey/page/000B6454-AF32-4479-A1BB-1B059E3605B3"
                      class="css-j6mzqe"
                    >
                      Amazon Germany
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">App</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/download?client=desktop"
                      class="css-j6mzqe"
                    >
                      Desktop App
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/download?client=mobile"
                      class="css-j6mzqe"
                    >
                      Mobile App
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/download?client=browserExtension"
                      class="css-j6mzqe"
                    >
                      Browser Extension
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/download?client=bridge"
                      class="css-j6mzqe"
                    >
                      Hardware Bridge
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://1key.so"
                      class="css-j6mzqe"
                    >
                      Web dApp
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Services</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://1key.so/swap"
                      class="css-j6mzqe"
                    >
                      Swap
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/cryptos"
                      class="css-j6mzqe"
                    >
                      Supported Cryptos
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://bip39.onekey.so/"
                      class="css-j6mzqe"
                    >
                      Recovery Phrase Converter
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/10453167224463-Supported-EIPs"
                      class="css-j6mzqe"
                    >
                      EIPs
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Developer</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://developer.onekey.so/"
                      class="css-j6mzqe"
                    >
                      The Developer Portal
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Learn</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/why"
                      class="css-j6mzqe"
                    >
                      Why Choose OneKey
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/security"
                      class="css-j6mzqe"
                    >
                      Security Architecture
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://blog.onekey.so/"
                      class="css-j6mzqe"
                    >
                      Our Blog
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Solutions</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/enterprise"
                      class="css-j6mzqe"
                    >
                      Enterprise Solutions
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/affiliate-program"
                      class="css-j6mzqe"
                    >
                      Referral
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekey.so/co-branded-partnership"
                      class="css-j6mzqe"
                    >
                      Co-branded Products
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/5967821214223"
                      class="css-j6mzqe"
                    >
                      Official Reseller
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">Support</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/"
                      class="css-j6mzqe"
                    >
                      Help Center
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/requests/new"
                      class="css-j6mzqe"
                    >
                      Submit a Request
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://firmware.onekey.so"
                      class="css-j6mzqe"
                    >
                      Firmware Update
                    </a>
                  </div>
                </div>
                <div class="css-ahi0zd">
                  <span class="css-afrhei">About</span>
                  <div class="css-1mh49xg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/10081334240271"
                      class="css-j6mzqe"
                    >
                      The Company
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://onekeyhq.atlassian.net/wiki/spaces/OC/overview"
                      class="css-j6mzqe"
                    >
                      Career
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/360002200956"
                      class="css-j6mzqe"
                    >
                      Media Kits
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/360002003315"
                      class="css-j6mzqe"
                    >
                      Privacy Policy
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://help.onekey.so/hc/articles/360002014776"
                      class="css-j6mzqe"
                    >
                      User Agreement
                    </a>
                  </div>
                </div>
              </div>
              <style data-emotion="css t8g12d">
                .css-t8g12d {
                  display: block;
                }
                @media (min-width: 414px) {
                  .css-t8g12d {
                    display: block;
                  }
                }
                @media (min-width: 960px) {
                  .css-t8g12d {
                    display: none;
                  }
                }
                @media (min-width: 1200px) {
                  .css-t8g12d {
                    display: none;
                  }
                }
                @media (min-width: 1440px) {
                  .css-t8g12d {
                    display: none;
                  }
                }
                @media (min-width: 1920px) {
                  .css-t8g12d {
                    display: none;
                  }
                }
              </style>
              <div class="css-t8g12d">
                <style data-emotion="css 1mtvbks">
                  .css-1mtvbks {
                    padding-top: 20px;
                    padding-bottom: 80px;
                    max-width: 480px;
                  }
                </style>
                <div class="css-1mtvbks">
                  <style data-emotion="css 1890woz">
                    .css-1890woz {
                      -webkit-box-pack: justify;
                      -webkit-justify-content: space-between;
                      justify-content: space-between;
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                    }
                  </style>
                  <div class="css-1890woz">
                    <div class="css-1sqqwpe">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/OneKeyHQ"
                        class="css-1cmwfgr"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                        >
                          <path
                            d="M24.052 3.25h4.293l-9.38 10.72L30 28.56h-8.64l-6.768-8.848-7.743 8.847H2.553l10.033-11.467L2 3.25h8.86l6.117 8.087 7.075-8.087Zm-1.507 22.74h2.379L9.567 5.684H7.014l15.53 20.305Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/OneKeyHQ/"
                        class="css-1cmwfgr"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                        >
                          <path
                            d="M16 2C8.265 2 2 8.265 2 16c0 6.195 4.008 11.427 9.572 13.282.7.123.963-.297.963-.665 0-.332-.018-1.434-.018-2.607-3.517.647-4.427-.858-4.707-1.645-.157-.402-.84-1.645-1.435-1.977-.49-.263-1.19-.91-.018-.928 1.103-.018 1.89 1.015 2.153 1.435 1.26 2.117 3.273 1.523 4.078 1.155.122-.91.49-1.523.892-1.873-3.115-.35-6.37-1.557-6.37-6.912 0-1.523.542-2.783 1.435-3.763-.14-.35-.63-1.785.14-3.71 0 0 1.172-.367 3.85 1.435a12.99 12.99 0 0 1 3.5-.472c1.19 0 2.38.157 3.5.472 2.677-1.82 3.85-1.434 3.85-1.434.77 1.924.28 3.36.14 3.71.893.98 1.435 2.222 1.435 3.762 0 5.372-3.273 6.563-6.387 6.912.507.438.944 1.278.944 2.59 0 1.873-.017 3.378-.017 3.85 0 .368.262.805.962.665A14.022 14.022 0 0 0 30 16c0-7.735-6.265-14-14-14Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://blog.onekey.so"
                        class="css-1cmwfgr"
                      >
                        <svg
                          viewBox="0 0 1043.63 592.71"
                          class="medium_svg__au medium_svg__av"
                          width="32"
                          height="32"
                        >
                          <g data-name="Layer 2">
                            <path
                              fill="currentColor"
                              d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36m322.89 0c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279m132.08 0c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                              data-name="Layer 1"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/OneKeyHQ"
                      class="css-nqgj01"
                    >
                      <svg
                        width="87"
                        height="34"
                        viewBox="0 0 87 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.6">
                          <path
                            d="M44.767 16.3732C47.1441 16.3732 48.8719 14.5793 48.8719 12.3894V12.3674C48.8719 10.1773 47.1661 8.40552 44.7891 8.40552C42.4119 8.40552 40.6842 10.1993 40.6842 12.3894V12.4113C40.6842 14.6014 42.39 16.3732 44.767 16.3732ZM44.7891 14.8105C43.4244 14.8105 42.456 13.71 42.456 12.3894V12.3674C42.456 11.0468 43.4024 9.96826 44.767 9.96826C46.1317 9.96826 47.1001 11.0687 47.1001 12.3894V12.4113C47.1001 13.732 46.1537 14.8105 44.7891 14.8105ZM50.1552 16.2412H51.85V13.93H53.1375C54.8654 13.93 56.252 13.0057 56.252 11.2229V11.2008C56.252 9.62706 55.1405 8.53757 53.3026 8.53757H50.1552V16.2412ZM51.85 12.4223V10.0673H53.1596C54.007 10.0673 54.5352 10.4745 54.5352 11.2339V11.2558C54.5352 11.9161 54.04 12.4223 53.1926 12.4223H51.85ZM57.2861 16.2412H63.1518V14.7334H58.9698V13.1157H62.6016V11.608H58.9698V10.0453H63.0967V8.53757H57.2861V16.2412ZM64.4385 16.2412H66.1114V11.3438L69.8421 16.2412H71.2838V8.53757H69.611V13.2808L66.0012 8.53757H64.4385V16.2412ZM43.7655 26.5973C45.4274 26.5973 46.5939 25.7389 46.5939 24.2092V24.1872C46.5939 22.8445 45.7134 22.2833 44.1508 21.8761C42.8192 21.5349 42.489 21.3698 42.489 20.8636V20.8416C42.489 20.4674 42.8302 20.1703 43.4794 20.1703C44.1287 20.1703 44.8001 20.4565 45.4823 20.9296L46.3627 19.6531C45.5814 19.0258 44.624 18.6736 43.5014 18.6736C41.9277 18.6736 40.8052 19.598 40.8052 20.9957V21.0177C40.8052 22.5474 41.8067 22.9766 43.3584 23.3728C44.6459 23.7029 44.9101 23.923 44.9101 24.3522V24.3743C44.9101 24.8255 44.4919 25.1006 43.7986 25.1006C42.9182 25.1006 42.1919 24.7374 41.4985 24.1651L40.4971 25.3647C41.4215 26.1901 42.599 26.5973 43.7655 26.5973ZM51.5863 26.6193C53.9633 26.6193 55.6911 24.8255 55.6911 22.6354V22.6134C55.6911 20.4234 53.9854 18.6516 51.6082 18.6516C49.2312 18.6516 47.5033 20.4455 47.5033 22.6354V22.6575C47.5033 24.8475 49.2091 26.6193 51.5863 26.6193ZM51.6082 25.0565C50.2436 25.0565 49.2751 23.956 49.2751 22.6354V22.6134C49.2751 21.2928 50.2216 20.2143 51.5863 20.2143C52.9508 20.2143 53.9193 21.3148 53.9193 22.6354V22.6575C53.9193 23.978 52.9729 25.0565 51.6082 25.0565ZM60.1879 26.6083C62.2568 26.6083 63.5664 25.4638 63.5664 23.1307V18.7837H61.8716V23.1967C61.8716 24.4182 61.2443 25.0455 60.2099 25.0455C59.1754 25.0455 58.5481 24.3963 58.5481 23.1417V18.7837H56.8533V23.1857C56.8533 25.4528 58.1189 26.6083 60.1879 26.6083ZM65.0726 26.4872H66.7674V24.0221H68.099L69.7498 26.4872H71.7307L69.8488 23.736C70.8283 23.3728 71.4995 22.5914 71.4995 21.3479V21.3259C71.4995 20.5995 71.2685 19.9943 70.8392 19.565C70.333 19.0588 69.5737 18.7837 68.5942 18.7837H65.0726V26.4872ZM66.7674 22.5254V20.3134H68.4511C69.2765 20.3134 69.7827 20.6875 69.7827 21.4139V21.4359C69.7827 22.0852 69.3096 22.5254 68.4842 22.5254H66.7674ZM76.415 26.6193C77.9007 26.6193 78.7813 26.0911 79.5735 25.2436L78.4949 24.1541C77.8897 24.7044 77.3504 25.0565 76.4701 25.0565C75.1495 25.0565 74.236 23.956 74.236 22.6354V22.6134C74.236 21.2928 75.1714 20.2143 76.4701 20.2143C77.2404 20.2143 77.8457 20.5445 78.44 21.0837L79.5186 19.8401C78.8033 19.1358 77.9337 18.6516 76.4811 18.6516C74.1149 18.6516 72.4642 20.4455 72.4642 22.6354V22.6575C72.4642 24.8694 74.148 26.6193 76.415 26.6193ZM80.7103 26.4872H86.5758V24.9795H82.3936V23.3618H86.0255V21.8541H82.3936V20.2913H86.5209V18.7837H80.7103V26.4872Z"
                            fill="white"
                          ></path>
                          <path
                            d="M19.6321 23.1003C22.0127 22.2161 23.2555 20.5133 23.2555 17.5827C23.2555 14.6521 20.7859 12.0697 17.7002 12.0646C14.444 12.0593 11.9877 14.6413 12.0269 17.5827C12.0662 20.5239 13.4688 22.4807 15.714 23.1883L11.7369 32.9726C6.41385 31.5945 1 25.3149 1 17.5827C1 8.42432 8.35885 1 17.5822 1C26.8055 1 34.2825 8.42432 34.2825 17.5827C34.2825 25.4352 28.9199 31.6273 23.4833 33L19.6321 23.1003Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <style data-emotion="css 1fjmjyl">
                    .css-1fjmjyl {
                      padding-top: 8px;
                    }
                  </style>
                  <div class="css-1fjmjyl">
                    <span class="css-1c1dj2u">
                      Since 2019 to Now ｜ OneKey Limited All Rights Reserved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div
    id="gatsby-announcer"
    style="
      position: absolute;
      top: 0;
      width: 1px;
      height: 1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    "
    aria-live="assertive"
    aria-atomic="true"
  ></div>
</div>
`;
