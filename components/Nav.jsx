"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react'
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import NavHeader from "./NavHeader";
import useAuthModal from "@hooks/useAuthModal";
import { useUser } from "@hooks/useUser";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  const [state, setState] = useState(false)
  const menuBtnEl = useRef()
  const authModal = useAuthModal();
  const navigation = [
    { name: "Homepage", href: "/" },
    { name: "About Us", href: "/aboutUs" },
  ]

  const supabaseClient = useSupabaseClient();
  const { user, userDetails } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();
    window.location.reload();
    if (error) {
      toast.error(error.message);
    }
  }


  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, [])

  return (
    <div className='fixed z-50 top-0 right-0 w-full'>
      <header className='relative'>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 md:hidden">
          <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
        </div>



        {/* <nav className='flex-between w-full mb-16 pt-3 '>  */}
        <nav className={`pb-5 md:text-sm md:static md:block ${state ? "bg-gray-600 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-600" : "hidden"}`}>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 items-center md:flex">
            <NavHeader state={state} onClick={() => setState(!state)} />
            {/* flex items-center justify-between py-5 md:block */}


            <div className={`flex-1 items-center text-lg mt-8 text-gray-800 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {
                  navigation.map((item, idx) => {
                    return (
                      <li key={idx} className="hover:text-gray-50">
                        <Link href={item.href} className="block">
                          {item.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                {user ? (


                  <button
                    type='button'
                    className="block hover:text-gray-50"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>

              ) : (

              <button
                type='button'
                className="block hover:text-gray-50"
                onClick={authModal.onOpen}
              >
                Sign in
              </button>
                  
              )}
              {!userDetails?.hasPaid ? (
                <Link href="/subscription" className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-lg text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex">
                Start now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>):(
                <div className="py-2.5 px-4 text-center rounded-full flex items-center justify-center gap-x-1 text-lg font-medium">
                
              </div>
              )}
              
            </div>
          </div>
          {/* Desktop Navigation */}
          {/* <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            {session?.user?.hasPurchased && (
              <Link href='/scoreboard' className='black_btn'>
                  Scoreboard
              </Link>
            )}

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    router.push('/login');
                    //signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={42}
              height={42}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/scoreboard'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Scoreboard
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div> */}
        </div>
      </nav>
    </header>
    </div >
  );
};

export default Nav;
