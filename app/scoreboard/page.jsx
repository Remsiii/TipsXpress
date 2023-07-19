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
						<a className="match-bet-place text-white/90 shadow-lg" href="https://sports.tipico.com/de">Zu den Details</a>
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

//   Erzielen beide teams ein tor?
// Wer gewinnt
// Over/under
// Wie viele tore erzielt team 1/2 -Over/Under
const Scoreboard = () => {

	const questions = ["Who will score the first goal?", "Will both teams score a goal?"];
	return (
		<>
		<h1 className='mt-[-50px] mb-[35px] text-5xl font-serif'>Scoreboard</h1>
		<div className="containerFootballScore mt-10">
		  <Match league="English Premier League" team1="Chelsea" team2="Man Utd" score1="3" score2="2"
		   date="3 May at" time="17:30" team1Img="https://assets.codepen.io/285131/chelsea.svg" team2Img="https://resources.premierleague.com/premierleague/badges/t1.svg" />
		  <Match league="English Premier League" team1="Man City" team2="Arsenal" score1="4" score2="1" 
		   date="5 May at" time="13:30" team1Img="https://upload.wikimedia.org/wikipedia/de/thumb/0/09/Wappen_Manchester_City_2016.svg/150px-Wappen_Manchester_City_2016.svg.png" team2Img="https://upload.wikimedia.org/wikipedia/de/thumb/3/32/FC_Arsenal_%28seit_2002%29.svg/1200px-FC_Arsenal_%28seit_2002%29.svg.png" />
		</div>
		#write a beatiful dropdown menu for the questions
		
		 
		</>
	  );
};


export default Scoreboard;
