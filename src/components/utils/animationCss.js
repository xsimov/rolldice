const animationCss = `
 & {
    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(1, 1, 1, 360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
      }
      12% {
        -webkit-transform: rotate3d(0, 1, 0, 270deg);
        transform: rotate3d(1, 1, 1, 270deg);
      }
      25% {
        -webkit-transform: rotate3d(0, 1, 0, -270deg);
        transform: rotate3d(1, 1, 1, -270deg);
      }
      50% {
        -webkit-transform: rotate3d(0, 1, 0, 360deg);
        transform: rotate3d(1, 1, 1, 360deg);
      }
      75% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(1, 1, 1, -360deg);
      }
      87% {
        -webkit-transform: rotate3d(0, 1, 0, 360deg);
        transform: rotate3d(1, 1, 1, 360deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(0, 1, 0, -360deg);
      }
    }

    &.rotate-die {
      animation: rotate-center 1s ease-in-out both;
      -webkit-animation: rotate-center 1s ease-in-out both;
    }
  }
`;

export { animationCss };
