"use client"

import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthModal from "@hooks/useAuthModal"
import { useUser } from "@hooks/useUser";
import detailsData from "@app/scoreboard/matchesData.json";


const bettingDetails = ({ params }) => {

    // const route = useCurrentRoute();
    // const teamName = route.params.teamName;
    const { teamName } = params;
    const { user } = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const { userDetails } = useUser();
    const onEnterWebsite = () => {
        if (!userDetails?.hasPaid) {
            router.replace('/');
            return;
        }
        else {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        onEnterWebsite();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <h1 className='mt-[-50px] mb-[35px] sm:mb-[60px] text-3xl sm:text-5xl font-serif'>Details</h1>
            <div className="w-full sm:w-9/12 md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto h-[200px]">
    <div className="relative overflow-x-auto rounded-lg overflow-hidden">
        <div className="w-full overflow-x-auto max-w-screen-lg mx-auto text-sm text-left text-gray-500 bg-gray-800">
            <div className="px-3 py-2 sm:px-6 sm:py-4 font-medium whitespace-normal text-white text-center text-lg leading-7">
            Liga: <span className="font-normal">{detailsData.Spiel_1.league}</span> <br />
                Spiel: <span className="font-normal">{detailsData.Spiel_1.team1} : {detailsData.Spiel_1.team2}</span> <br />
                Uhrzeit: <span className="font-normal">{detailsData.Spiel_1.time}</span> <br />
                Spiel-Tipp: <span className="font-normal">{detailsData.Spiel_1.SpielTips}</span> <br />
                Quote: <span className="font-normal">{detailsData.Spiel_1.Quote}</span> <br />
                <span className="font-normal">{detailsData.Spiel_1.Text}</span>
            </div>
        </div>
    </div>
</div>
            <br></br>
        </>
    );
};

//   Erzielen beide teams ein tor?
// Wer gewinnt
// Over/under
// Wie viele tore erzielt team 1/2 -Over/Under


export default bettingDetails;
