"use client"

import React, { useEffect, useState } from 'react';
import matchesData from './matchesData.json';
import Match from './Match';
import { usePayment } from '../context/PaymentContext';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Scoreboard = () => {
	const { hasPaid } = usePayment();
	const [matches, setMatches] = useState([]);
	const navigate = useNavigate();


	 useEffect(() => {
        if (!hasPaid) {
            navigate("/subscription");
        }
    }, [hasPaid, navigate]);

	useEffect(() => {
        setMatches(matchesData);
    }, []);

	if (!hasPaid) {
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
