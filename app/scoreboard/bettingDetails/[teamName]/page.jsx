"use client"

import React from 'react';
import detailsData from './matchDetailsData.json';
import { useState, useEffect } from "react";
import { useCurrentRoute  } from 'next/navigation';

const bettingDetails = ( { params } ) => {

    // const route = useCurrentRoute();
    // const teamName = route.params.teamName;
    const { teamName } = params;


    // const matchDetails = detailsData[teamName];

    return (
<>
<h1 className='mt-[-50px] mb-[35px] sm:mb-[60px] text-3xl sm:text-5xl font-serif'>Details</h1>

<div className="relative overflow-x-auto rounded-lg overflow-hidden">
    <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody className="bg-white dark:bg-gray-800">
                
            {["bothTeamsScore", "winner", "overUnder"].map((key, index) => (
            <tr key={index} className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {detailsData[teamName][key].question}
                </th>
                <td className="px-3 py-2 sm:px-6 sm:py-4">
                    {detailsData[teamName][key].answer1}
                </td>
                <td className="px-3 py-2 sm:px-6 sm:py-4">
                    {detailsData[teamName][key].answer2}
                </td>
            </tr>
        ))}
        </tbody>
        </table>
    </div>
</div>
<br></br>

<div className="relative overflow-x-auto rounded-lg overflow-hidden">
    <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            {detailsData[teamName].overUnderStats.data.map((item, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.value}
                    </th>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> {item.over}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span> {item.under}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
</div>
<br></br>
<div className="relative overflow-x-auto rounded-lg overflow-hidden">
    <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 bg-white dark:bg-gray-800">
            <tr>
                <th scope="col" className="px-6 py-3" colSpan={3}>
                Wie viele tore erzielt Team 1
                </th>
            </tr>
        </thead>
            <tbody className="bg-white dark:bg-gray-800">
            {detailsData[teamName].GoalsTeam1.data.map((item, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.value} <span className="mr-16"></span>
                    </th>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> {item.over}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span> {item.under}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
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
