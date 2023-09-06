"use client"
import React from 'react'

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@hooks/useUser";



const ClassicUserUI = () => {
    const { userDetails } = useUser();



    return (


        <section className='w-full flex-center flex-col'>


            {userDetails?.hasPaid ? (
                <>
                    <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-gray-800 sm:text-5xl text-center'>
                        Super, du hast bezahlt!


                    </h1>
                    <div className='text-2xl font-bold text-gray-800 text-center mt-5 text-5xl leading-[1.15] sm:text-5xl'> Hier sind die heitigen Tipps</div>
                    <br></br>

                    <Link href="/scoreboard" className="buttonSubscribe">
                        Scoreboard
                    </Link>
                </>
            ) : (
                <>
                    <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-gray-800 sm:text-5xl text-center'>
                        Super, du bist angemeldet!


                    </h1>
                    {/* <div className='text-2xl font-bold text-gray-700 text-center mt-5 text-5xl leading-[1.15] text-black sm:text-5xl'> Jetzt Zahlen!</div> */}
                    <br></br>
                    <Link href="/subscription" className="buttonSubscribe">
                        Start Now!
                    </Link>
                </>
            )
            }

        </section>

    )
}

export default ClassicUserUI