"use client"

import React, { useEffect, useState } from 'react';
import matchesData from './matchesData.json';
import Match from './Match';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const Scoreboard = () => {
	const [matches, setMatches] = useState([]);
	const { data: session } = useSession();
	const router = useRouter();

	 useEffect(() => {
        if (!session?.user?.hasPurchased) {
			router.push("/subscription");
        }
    }, [session]);

	useEffect(() => {
        setMatches(matchesData);
    }, []);

	if (!session?.user?.hasPurchased) {
        return null;
    }

	const questions = ["Who will score the first goal?", "Will both teams score a goal?"];
	return (
		<>
		<h1 className='mt-[-50px] mb-[35px] text-5xl font-serif'>Scoreboard</h1>
		<div className="containerFootballScore mt-10" style={{ marginBottom: '80px' }}>
		{matches.map((match, index) => (
          <Match key={index} {...match} />
        ))}
		</div>
		</>
	  );
};


export default Scoreboard;
