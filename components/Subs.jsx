import React from 'react';

const Scoreboard = () => {

  return (
    <div className="containerFootballScore mt-10">
	<div className="match">
		<div className="match-header">
			<div className="match-tournament"><img className="block" src="https://assets.codepen.io/285131/pl-logo.svg" />English Premier League</div>
		</div>
		<div className="match-content">
			<div className="columnScore">
				<div className="team team--home">
					<div className="team-logo">
						<img className="block" src="https://assets.codepen.io/285131/chelsea.svg" />
					</div>
					<h2 className="team-name">Chelsea</h2>
				</div>
			</div>
			<div className="columnScore">
				<div className="match-details">
					<div className="match-date">
						3 May at <strong className="font-medium">17:30</strong>
					</div>
					<div className="match-score">
						<span className="match-score-number match-score-number--leading">3</span>
						<span className="match-score-divider">:</span>
						<span className="match-score-number">1</span>
					</div>
					<div className="match-bet-options">
						<button className="match-bet-option">1.48</button>
						<button className="match-bet-option">3.84</button>
						<button className="match-bet-option">5.24</button>
					</div>
					<a className="match-bet-place text-white/90 shadow-lg" href="https://sports.tipico.com/de">Place a bet</a>
				</div>
			</div>
			<div className="columnScore">
				<div className="team team--away">
					<div className="team-logo">
				
						<img className="block" src="https://resources.premierleague.com/premierleague/badges/t1.svg" />
					</div>
					<h2 className="team-name"> Man Utd</h2>
				</div>
			</div>
		</div>
	</div>
</div>
  );
};

export default Scoreboard;