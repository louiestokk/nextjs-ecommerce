import '@styles/globals.css'
import '../components/NavComp'
import Providers from '@redux/Providers';
import NavComp from '../components/NavComp';
import TopNav from '@components/TopNav';
import FooterComp from '@components/FooterComp';


export const metadata = {
  title: "Fynda på nätet - Låga priser & snabb leverans",
  description: "Billig shopping på nätet. Tryggt, enkelt och billigt. Fynda bland tusentals produkter. Välkommen till .struts - Ditt online köpcenter!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head></head>
      <body>
      <TopNav color='white' background='#fd5c63' height=''/>
        <div className="app">
        <NavComp />
        <Providers>
        {children}
        </Providers>
        
        </div>
          <FooterComp />
      </body>
    </html>
  );
}
