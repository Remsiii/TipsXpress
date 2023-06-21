import '@styles/global.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Bet Real Football",
  description: "100% Real Bets ",
};


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
  )
}

export default RootLayout;