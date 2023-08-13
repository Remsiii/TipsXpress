import '@styles/global.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import SubscriptionInfo from "./subscription/page.jsx";
import Scoreboard from './scoreboard/page.jsx';
import Home from './page.jsx';
import BettingDetails from './scoreboard/bettingDetails/page.jsx';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";


export const metadata = {
  title: "PetaBet",
  description: "Win Big with Expert Tips",
};

function PrivateRoute({ children }) {
  const { data: session } = useSession();

  const router = useRouter();

  if (session?.user) {
    return children;
  } else {
    return router.push("/");
  }
}


const RootLayout = ({ children, success }) => {

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
