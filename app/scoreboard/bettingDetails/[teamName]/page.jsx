"use client"

import React from 'react';
import detailsData from './matchDetailsData.json';
import { useState, useEffect } from "react";
import { useCurrentRoute } from 'next/navigation';

const bettingDetails = ({ params }) => {

    // const route = useCurrentRoute();
    // const teamName = route.params.teamName;
    const { teamName } = params;


    // const matchDetails = detailsData[teamName];

    return (
        <>
            <h1 className='mt-[-50px] mb-[35px] sm:mb-[60px] text-3xl sm:text-5xl font-serif'>Details</h1>
            <div className="w-full sm:w-9/12 md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto">
            <div className="relative overflow-x-auto rounded-lg overflow-hidden">
                <div className="w-full overflow-x-auto">
                <table className="w-full max-w-screen-lg mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody className="bg-white dark:bg-gray-800">
                            {["bothTeamsScore", "winner", "overUnder"].map((key, index) => (
                                <tr key={index} className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                                        {detailsData[teamName][key].question}
                                    </th>
                                    {["answer1", "answer2"].map((answerKey) => (
                                        <td key={answerKey} className={`px-3 py-2 sm:px-6 sm:py-4 ${detailsData[teamName][key].highlighted === answerKey ? 'text-green-600 font-bold whitespace-nowrap' : ''}`}>
                                        {detailsData[teamName][key][answerKey]}
                                    </td>
                                    ))}
                                </tr>
                            ))}
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
                            {Object.keys(detailsData[teamName].overUnderStats).map((key, index) => (
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
                            ))}
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
                            {Object.keys(detailsData[teamName].GoalsTeam1).map((key, index) => (
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    );
};

//   Erzielen beide teams ein tor?
// Wer gewinnt
// Over/under
// Wie viele tore erzielt team 1/2 -Over/Under


export default bettingDetails;
