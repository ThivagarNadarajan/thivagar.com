import nodeRoyale from '../../assets/img/Node Royale.png';
import anjaleeFineArts from '../../assets/img/Anjalee Fine Arts.png';
import teaforgeGames from '../../assets/img/Teaforge Games.png';
import portfolio from '../../assets/img/Portfolio.png';
import sleepSimple from '../../assets/img/Sleep Simple.png';
import loanTracker from '../../assets/img/Loan Tracker.png';
import hltbLite from '../../assets/img/HLTB Lite.png';

const projects = [
	{
		title: 'Teaforge Games',
		imgSrc: teaforgeGames,
		link: 'https://teaforge.com',
		info: 'Website to play social deduction games (Resistance, Werewolf etc.)',
		tags: ['ReactJS', 'TypeScript', 'Node.js', 'Express', 'Socket.io']
	},
	{
		title: 'HLTB Lite',
		imgSrc: hltbLite,
		link: 'https://musing-yalow-4d66e9.netlify.app',
		info: 'Visualization of game completion data from HowLongToBeat',
		tags: ['ReactJS', 'TypeScript', 'Node.js', 'ReCharts']
	},
	{
		title: 'Node Royale',
		imgSrc: nodeRoyale,
		link: 'https://node-royale.herokuapp.com',
		info: '2D multiplayer battle royale shooter; last one standing wins',
		tags: ['ReactJS', 'Node.js', 'Express', 'WebSockets', 'SQLite3']
	},
	{
		title: 'Portfolio',
		imgSrc: portfolio,
		link: 'https://github.com/ThivagarNadarajan/thivagar.com',
		info: 'Personal portfolio website to show my projects & experience (this website)',
		tags: ['ReactJS', 'TypeScript']
	},
	{
		title: 'Anjalee Fine Arts',
		imgSrc: anjaleeFineArts,
		link: 'https://anjaleefinearts.com',
		info: 'Website to promote a local music school',
		tags: ['HTML5', 'CSS3', 'Bootstrap 4']
	},
	{
		title: 'Loan Tracker',
		imgSrc: loanTracker,
		link: 'https://github.com/ThivagarNadarajan/Loan-Tracker',
		info: 'iOS application to keep track of loans with your contacts',
		tags: ['Swift', 'SQLite3']
	},
	{
		title: 'Sleep Simple',
		imgSrc: sleepSimple,
		link: 'https://github.com/ThivagarNadarajan/Sleep-Simple',
		info: 'iOS application to emit basic white noise',
		tags: ['Swift']
	}
];

export default projects;