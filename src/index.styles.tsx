import { Global, css } from "@emotion/react";

import fontBlack from "./assets/fonts/NeueMachina/NeueMachina-Black.ttf";
import fontRegular from "./assets/fonts/NeueMachina/NeueMachina-Regular.ttf";
import fontBold from "./assets/fonts/NeueMachina/NeueMachina-Bold.ttf";
import fontMedium from "./assets/fonts/NeueMachina/NeueMachina-Medium.ttf";

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Neue Machina";
          src: local(""), url(${fontBlack}) format("truetype");
          font-weight: 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Neue Machina";
          src: local(""), url(${fontRegular}) format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "Neue Machina";
          src: local(""), url(${fontBold}) format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Neue Machina";
          src: local(""), url(${fontMedium}) format("truetype");
          font-weight: 500;
          font-style: normal;
        }

        :root {
          --max-width: 768px;
          --transition-duration: 0.15s;
          --footer-height: 100px;
          --border-radius: 36px;
          --border-radius-small: 24px;

          --black: #000;
          --deep-dark: #1a1a1a;
          --deep-blue-inno: #020223;
          --blue-inno: #1449f5;
          --white-inno: #fff;
          --gray-inno: #7b818f;
          --black-inno: #36383a;
          --gray-light-inno: #dbdbdb;
        }

        html {
          font-family: "Neue Machina", sans-serif;
          font-size: 16px;
          /* CSS custom property for the polyfill */
          --scroll-behavior: smooth;
          /* Normal CSS property for browsers with native support */
          scroll-behavior: smooth;
          background-color: var(--black);
          color: var(--white-inno);
        }

        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          max-width: 100vw;
        }

        * {
          box-sizing: border-box;
        }

        #root {
          height: 100%;
          overflow: hidden;
        }

        input,
        select,
        button {
          outline: none;
          border: none;
          border-radius: var(--border-radius);
          font-family: "Neue Machina", sans-serif;
          background-color: var(--deep-dark);
          color: var(--white-inno);
        }

        select {
          cursor: pointer;
        }

        button {
          cursor: pointer;
        }

        iframe {
          border: 0;
        }
      `}
    />
  );
};
