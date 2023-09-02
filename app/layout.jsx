import '@styles/global.css';

import Nav from "@components/Nav";
import BettingDetails from './scoreboard/bettingDetails/[teamName]/page.jsx';
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SupabaseProvider from '@providers/SupabaseProvider';
import UserProvider from '@providers/UserProvider';
import ModalProvider from '@providers/ModalProvider';


export const metadata = {
  title: "PetaBet",
  description: "Win Big with Expert Tips",
};

function PrivateRoute({ children }) {

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
        <SupabaseProvider>
          <UserProvider>
           <ModalProvider/>
            {/* <Provider> */}
              <div className='main'>
                <div className='gradient' />
              </div>

              <main className='app pt-[240px]'>
                <Nav />
                {children}
              </main>
            {/* </Provider> */}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>

  )
}

export default RootLayout;
