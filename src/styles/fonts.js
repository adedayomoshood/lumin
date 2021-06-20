import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'FF Bau Regular';
        src: url('https://cdn.shopify.com/s/files/1/0044/1237/5107/t/1/assets/3A0D89_1_0.woff2')
          format('woff2');
        font-display: swap;
      }

      @font-face {
          font-family: 'FF Bau Medium';
          src: url("https://cdn.shopify.com/s/files/1/0044/1237/5107/t/1/assets/3A0D89_0_0.woff2") format("woff2");
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Freight Display Pro';
        src: url('https://use.typekit.net/af/f15774/0000000000000000000132cf/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3');
        font-display: swap;
        font-weight: 400;
      }
    `}
  />
);
export default Fonts;
