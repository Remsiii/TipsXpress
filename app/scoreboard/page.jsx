"use client"

import React, { useEffect, useState } from 'react';
import matchesData from './matchesData.json';
import Match from './Match';
import { useRouter } from "next/navigation";
import useAuthModal from "@hooks/useAuthModal"
import { useUser } from "@hooks/useUser";

const Scoreboard = () => {
	const [matches, setMatches] = useState([]);
    
	const router = useRouter();
    const authModal = useAuthModal();
    const { user } = useUser();
	const [isLoading, setIsLoading] = useState(true);

	const { userDetails } = useUser();
    const onEnterWebsite = () => { 
		if (!userDetails?.hasPaid) {
			router.replace('/'); 
			return;
		  }
		  else
		  {
			setIsLoading(false);
		  }
		};


	useEffect(() => {
		onEnterWebsite();
        setMatches(matchesData);
		
    }, []);

	// if (!session?.user?.hasPurchased) {
    //     return null;
    // }

	if(isLoading) {
		return <div>Loading...</div>; // Zeige einen Ladezustand an
	}

	const questions = ["Who will score the first goal?", "Will both teams score a goal?"];
	return (
		<>
		<h1 className='mt-[-50px] mb-[35px] text-5xl font-serif'>Scoreboard</h1>
		<div className="containerFootballScore mt-10" style={{ marginBottom: '80px' }}>
		{Object.entries(matches).map(([spiel, matchData], index) => (
          <Match key={index} spiel={spiel} {...matchData} />
        ))}
		</div>
		</>
	  );
};


export default Scoreboard;
