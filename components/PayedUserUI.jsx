"use client"
import React from 'react'

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@hooks/useUser";


const ClassicUserUI = () => {
    const { user } = useUser();

    return (


        <section className='w-full flex-center flex-col'>

            <h1 className='head_text text-center'>
                Hier sind die heitigen Tipps
                <br />
                <span className='orange_gradient text-center'>PetaBet</span>
            </h1>

                <Link href="/scoreboard" className="buttonSubscribe">
                    Scoreboard
                </Link>
        </section>
    )
}

export default ClassicUserUI