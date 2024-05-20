import '@styles/globals.css'
import '../components/NavComp'
import Providers from '../redux/Providers';
import NavComp from '../components/NavComp';
import TopNav from '../components/TopNav';
import FooterComp from '../components/FooterComp';
import Provider from '@components/Provider';

export const metadata = {
  title: "Fynda på nätet - Låga priser & snabb leverans",
  description: "Billig shopping på nätet. Tryggt, enkelt och billigt. Fynda bland tusentals produkter. Välkommen till .struts - Ditt online köpcenter!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet" href="../public/styles/styles.css"></link>
    </head>
      <body>
        <Providers>
        <Provider>
      <TopNav color='white' background='#fd5c63' height=''/>
        <div className="app">
        <NavComp />
        {children}
        </div>
          <FooterComp />
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
