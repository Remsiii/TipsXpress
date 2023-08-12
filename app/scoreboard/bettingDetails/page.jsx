import React from 'react';
import detailsData from './matchDetailsData.json';

const bettingDetails = () => {
    return (
<>
<h1 className='mt-[-50px] mb-[35px] sm:mb-[60px] text-3xl sm:text-5xl font-serif'>Details</h1>

<div className="relative overflow-x-auto rounded-lg overflow-hidden">
    <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody className="bg-white dark:bg-gray-800">
            <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-3  py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {detailsData.bothTeamsScore.question}
                    </th>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 text-green-500 font-bold">
                        {detailsData.bothTeamsScore.answer1}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        {detailsData.bothTeamsScore.answer2}
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {detailsData.winner.question}
                    </th>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        {detailsData.winner.answer1}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                        {detailsData.winner.answer2}
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Over/Under
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Black
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Accessories
                    </td>
                </tr>
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
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        0,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 1,04
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  9,10
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 3,59
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  3,56
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        2,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 8,35
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  2,46
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        3,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 2,46
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  9,10
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        4,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 13,2
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  9,10
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    5,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 1,04
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  2,46
                    </td>
                </tr>
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
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        0,5 <span className="mr-16"></span>
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 1,04
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  9,10
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1,5 
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 3,59
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  3,56
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        2,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 8,35
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  2,46
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        3,5
                    </th>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Over <span className="mr-16"></span> 2,46
                    </td>
                    <td class="px-3 py-2 sm:px-6 sm:py-4">
                        Under <span className="mr-16"></span>  9,10
                    </td>
                </tr>
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
