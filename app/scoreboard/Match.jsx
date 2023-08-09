import React from 'react';

const Match = ({ league, team1, team2, score1, score2, date, time, team1Img, team2Img }) => {
	return (
		<div className="match">
			<div className="match-header">
				<div className="match-tournament"><img className="block" src="https://assets.codepen.io/285131/pl-logo.svg" />
				{league}</div>
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
						<div className="match-bet-options">
							<button className="match-bet-option">1.48</button>
							<button className="match-bet-option">3.84</button>
							<button className="match-bet-option">5.24</button>
						</div>
						<a className="match-bet-place text-white/90 shadow-lg" href="/bettingDetails">Zu den Details</a>
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
	);
  };

export default Match;