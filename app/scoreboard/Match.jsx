import Link from "next/link";
import React from 'react';

const Match = ({ spiel, league, team1, team2, score1, score2, date, time, team1Img, team2Img }) => {
	return (
		<Link 
						
						href="/scoreboard/bettingDetails/[teamName]"
						as={`/scoreboard/bettingDetails/${spiel}`}>
		<div className="match">
			<div className="match-header">
				<div className="match-tournament">
				{league}
				</div>
			</div>
			<div className="match-content">
				<div className="columnScore">
					<div className="team team--home">
						<div className="team-logo">
							<img className="block" src={team1Img} />
						</div>
						<h2 className="team-name">{team1}</h2>
					</div>
				</div>
				<div className="columnScore">
					<div className="match-details">
						<div className="match-date">
						{date} <strong className="font-medium">{time}</strong>
						</div>
						<div className="match-score">
						</div>
					
						<button className="match-bet-place text-white/90 shadow-lg" >Zu den Details</button>
					
					</div>
				</div>
				<div className="columnScore"> 
					<div className="team team--away">
						<div className="team-logo">
					
							<img className="block" src={team2Img} />
						</div>
						<h2 className="team-name"> {team2}</h2>
					</div>
				</div>
			</div>
		</div>
		</Link>
	);
  };

export default Match;