import { Global, css } from "@emotion/react";

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        :root {
          --max-width: 768px;
          --transition-duration: 0.15s;
          --footer-height: 100px;
          --border-radius: 36px;

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
          font-family: "Raleway", sans-serif;
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
          font-family: "Raleway", sans-serif;
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
