import React from 'react';
import styled from 'styled-components';

const Experience = (): JSX.Element => {
	return (
		<Section>
			<div className="grid">
				<div>
					<h1>Projects</h1>
					<h2>Computer Science Student &amp; Freelance Web Developer</h2>
					<p>
						Hi there! I&apos;m a freelance web developer and a senior at the University
						of Toronto studying Computer Science. Currently interning at
						Environment &amp; Climate Change Canada.
					</p>
					<hr />
				</div>
			</div>
		</Section>
	);
};

const Section = styled.div`
	// height: 100vh;
	margin: 8vh 8vw 8vh 8vw;

	h1 {
		font-size: 50px;
		font-weight: 400;
	}


	h2 {
		color: #c1c7e6;
		font-weight: 300;
	}

	hr {
		margin: 1rem 0 1.5rem 0;
		width: 50px;
		height: 6px;
		background: white;
	}

	p {
		font-size: 23px;
		margin-top: 1rem;
	}

	button {
		margin-right: 10px;
		padding: 7px 5px 5px 5px;

		border-radius: 2px;
		// width: 20%;
		font-size: 2rem;

		transition: background 100ms;

		// background: #4e5991;
		// background: #3e5c9e;
		background: none;
		color: white;
		border: 0;

		:hover {
			// background: #6b7ac9;
			background: #5279d1;
			cursor: pointer;
		}

		:focus {
			outline: none;
		}
	}

	img {
		// background: lightblue;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
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



export default Experience;