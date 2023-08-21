"use client";

import Feed from "@components/Feed";
import Nav from "@components/Nav";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import  Link  from "next/link";


const Home = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return(

    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Win Big with Expert Tips 
      <br />
      <span className='orange_gradient text-center'>PetaBet</span>
      </h1>
      <p className='mt-5 text-lg text-gray-300 sm:text-xl max-w-2xl text-center'>
      Hol dir die besten Fußball-Wetttipps und erhöhe dir die Gewinnchancen. Meld dich jetzt an!
      </p>
      
      

    {!session?.user ? (
      <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <a
            type='button'
            className="buttonSubscribe"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
          >
            Sign in
          </a>
        ))}
      </div>
    ) : (
      <Link href="/subscription" className="buttonSubscribe"> 
      Subscribe
      </Link>
      
      
    )}

    </section>
  );
};

export default Home;