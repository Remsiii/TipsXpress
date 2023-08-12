"use client";
import '@styles/global.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { PaymentProvider } from './context/PaymentContext';
import { Router, Routes, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import SubscriptionInfo from "./subscription/page.jsx";
import Scoreboard from './scoreboard/page.jsx';
import Home from './page.jsx';
import BettingDetails from './scoreboard/bettingDetails/page.jsx';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePayment } from './context/PaymentContext';
import { useNavigate } from "react-router-dom";

export const metadata = {
  title: "PetaBet",
  description: "Win Big with Expert Tips",
};

function PrivateRoute({ children }) {
  const { data: session } = useSession();
  const { hasPaid } = usePayment();
  const navigate = useNavigate();

  if (session?.user) {
    return children;
  } else {
    return navigate("/");
  }
}


const RootLayout = ({ children, success }) => {
  console.log("alo:" + process.env.PAYPAL_CLIENT_ID);
  return (
    <BrowserRouter>
    <html lang='en'>
    <body>
    <PaymentProvider>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/subscription' element={<PrivateRoute><SubscriptionInfo /></PrivateRoute>} />
              <Route path='/scoreboard' element={<PrivateRoute><Scoreboard /></PrivateRoute>} />
              <Route path='/scoreboard/bettingDetails' element={<PrivateRoute><BettingDetails /></PrivateRoute>} />
          </Routes>
          {/* {children} */}
        </main>

      </Provider>
      </PaymentProvider>
    </body>
  </html>
  </BrowserRouter>
  )
}

export default RootLayout;
