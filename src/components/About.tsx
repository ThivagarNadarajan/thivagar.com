import React from 'react';
import styled from 'styled-components';

import desktop from '../assets/Desktop.png';

//TODO: get image to put here
//TODO: rm <br/> when done
const About = (): JSX.Element => {
	return (
		<Section>
			<div className="grid">
				<div>
					<h1>Thivagar</h1>
					<h1>Nadarajan</h1>
					<h2>Computer Science Student &amp; Freelance Web Developer</h2>
					<hr />
					<div>
						<button>Resume</button>
						<button>Fiverr</button>
						<button>Github</button>
						<button>LinkedIn</button>
					</div>
					<p>
						I&apos;m a freelance web developer and senior at the University
						of Toronto studying Computer Science. Currently interning at
						Environment &amp; Climate Change Canada.
					</p>
				</div>
				<img src={desktop} />
			</div>
			<br />
		</Section>
	);
};

const Section = styled.div`
	height: 100vh;
	// background: salmon; //TODO: remove

	h1, h3, h4 {
		margin: 0;
	}

	margin: 10vh 8vw 10vh 8vw;

	h1 {
		font-size: 60px;
	}

	button {
		margin-right: 10px;
		padding: 7px 5px 5px 5px;

		border-radius: 5px;
		width: 20%;
		font-size: 1.4rem;

		transition: background 100ms;

		:focus {
			outline: none;
		}
	}

	p {
		font-size: 30px;
	}

	img {
		// background: lightblue;
		margin-left: auto;
		margin-right: auto;
	}

	@media only screen and (min-width: 1000px) {
		.grid {
			margin-top: 50px;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (max-width: 1000px) {
		img {
			display: none;
		}
	}
`;



export default About;