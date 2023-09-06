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
        return <div>Loading...</div>; // Zeige einen Ladezustand an
    }

    return (
        <>
            <h1 className='mt-[-50px] mb-[35px] sm:mb-[60px] text-3xl sm:text-5xl font-serif'>Details</h1>
            <div className="w-full sm:w-9/12 md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto">
                <div className="relative overflow-x-auto rounded-lg overflow-hidden">
                    <div className="w-full overflow-x-auto max-w-screen-lg mx-auto text-sm text-left text-gray-500 dark:text-gray-400 bg-blue-900">
                        <div className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-normal dark:text-white text-center">
                            {detailsData.Spiel_1.Text}
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="relative overflow-x-auto rounded-lg overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full max-w-screen-lg mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 bg-white dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Over/Under
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800">
                                {/* {Object.keys(detailsData[teamName].overUnderStats).map((key, index) => (
                                    <tr key={index} className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {key}
                                        </th>
                                        {["over", "under"].map((answerKey, keyIdx) => (
                                            <td key={keyIdx} className={`px-3 py-2 sm:px-6 sm:py-4 ${detailsData[teamName].overUnderStats[key].highlighted === answerKey ? 'text-green-600 font-bold' : ''}`}>
                                                {keyIdx === 0 ? 'Over' : 'Under'} <span className="mr-16"></span> {detailsData[teamName].overUnderStats[key][answerKey]}
                                            </td>
                                        ))}
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <div className="relative overflow-x-auto rounded-lg overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full max-w-screen-lg mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 bg-white dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3" colSpan={3}>
                                        Wie viele tore erzielt Team 1
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800">
                                {/* {Object.keys(detailsData[teamName].GoalsTeam1).map((key, index) => (
                                    <tr key={index} className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {key}
                                        </th>
                                        {["over", "under"].map((answerKey, keyIdx) => (
                                            <td key={keyIdx} className={`px-3 py-2 sm:px-6 sm:py-4 ${detailsData[teamName].GoalsTeam1[key].highlighted === answerKey ? 'text-green-600 font-bold' : ''}`}>
                                                {keyIdx === 0 ? 'Over' : 'Under'} <span className="mr-16"></span> {detailsData[teamName].GoalsTeam1[key][answerKey]}
                                            </td>
                                        ))}
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                    <center>

                        <a >Mein informationen sind richtig</a>
                    </center>
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
