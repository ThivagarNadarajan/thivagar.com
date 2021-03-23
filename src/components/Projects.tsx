import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import nodeRoyale from '../assets/img/Node Royale.png';
import anjaleeFineArts from '../assets/img/Anjalee Fine Arts.png';
import teaforgeGames from '../assets/img/Teaforge Games.png';
import portfolio from '../assets/img/Portfolio.png';
import sleepSimple from '../assets/img/Sleep Simple.png';
import loanTracker from '../assets/img/Loan Tracker.png';

const Projects = (): JSX.Element => {
	return (
		<Section>
			<h1>Projects</h1>
			<Cards>
				<Card
					imgSrc={teaforgeGames} title={'Teaforge Games'}
					link={'https://teaforge.com'}
					info={'Website to play social deduction games (Resistance, Werewolf etc.)'}
					tags={
						['ReactJS', 'TypeScript', 'Node.js',
							'Express', 'Socket.io']
					} />
				<Card
					imgSrc={nodeRoyale} title={'Node Royale'}
					link={'https://node-royale.herokuapp.com'}
					info={'2D multiplayer battle royale shooter; last one standing wins '}
					tags={['ReactJS', 'Node.js', 'Express', 'WebSockets', 'SQLite3']}
				/>
				<Card
					imgSrc={portfolio} title={'Portfolio'}
					link={'https://github.com/ThivagarNadarajan/thivagar.com'}
					info={
						'Personal portfolio website to show my projects & experience '
						+ '(this website).'
					}
					tags={['ReactJS', 'TypeScript']} />
				<Card
					imgSrc={anjaleeFineArts} title={'Anjalee Fine Arts'}
					link={'https://anjaleefinearts.com'}
					info={'Website to promote a local music school.'}
					tags={['HTML5', 'CSS3', 'Bootstrap 4']} />
				<Card
					imgSrc={loanTracker} title={'Loan Tracker'}
					link={'https://github.com/ThivagarNadarajan/Loan-Tracker'}
					info={'iOS application to keep track of loans with your contacts'}
					tags={['Swift', 'SQLite3']} />
				<Card
					imgSrc={sleepSimple} title={'Sleep Simple'}
					link={'https://github.com/ThivagarNadarajan/Sleep-Simple'}
					info={'iOS application to emit basic white noise'}
					tags={['Swift']} />
			</Cards>
		</Section>
	);
};

const Section = styled.div`
	margin-bottom: 30px;
`;

const Cards = styled.div`
	margin-top: 25px;
	display: grid;
	row-gap: 25px;
	column-gap: 25px;


	@media only screen and (min-width: 1525px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media only screen and (max-width: 1525px) {
		grid-template-columns: 1fr;
	}

	@media only screen and (max-width: 1240px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;



export default Projects;