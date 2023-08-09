
"use client"

import React, { useEffect, useState } from 'react';
import matchesData from './matchesData.json';
import Match from './Match';



//   Erzielen beide teams ein tor?
// Wer gewinnt
// Over/under
// Wie viele tore erzielt team 1/2 -Over/Under
const Scoreboard = () => {

	const [matches, setMatches] = useState([]);

	useEffect(() => {
	  setMatches(matchesData);
	}, []);

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
