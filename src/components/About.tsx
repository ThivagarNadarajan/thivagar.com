import React from 'react';
import styled from 'styled-components';

import { InlineIcon } from '@iconify/react';
import fiverrIcon from '@iconify/icons-jam/fiverr';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxEnvelope from '@iconify-icons/bx/bx-envelope';

//TODO: maybe change hover effect
//TODO-DONE: link resume
//TODO: replace the 'filter: brightness' on button with another color
const About = (): JSX.Element => {
	return (
		<Section>
			<h1>Thivagar</h1>
			<h1>Nadarajan</h1>
			<h2>Computer Science Student &amp; Freelance Web Developer</h2>
			<p>
				Hi there! I&apos;m a freelance web developer and a senior at the University
				of Toronto studying Computer Science. Currently interning at
				Environment &amp; Climate Change Canada.
			</p>
			<button>View Resume</button>
			<hr />
			<div>
				<a
					href='https://www.fiverr.com/thiv_nadarajan'
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={fiverrIcon} />
				</a>
				<a
					href='https://www.linkedin.com/in/thivagar-nadarajan-40802118a'
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={bxlLinkedin} />
				</a>
				<a
					href='https://github.com/ThivagarNadarajan'
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={githubFilled} />
				</a>
				<a href='mailto:thiv.nadarajan@gmail.com'>
					<InlineIcon icon={bxEnvelope} />
				</a>
				<br />
			</div>
		</Section>
	);
};

const Section = styled.div`
	margin-bottom: 50px;

	h1 {
		font-size: 60px;
		font-weight: 400;
	}

	h2 {
		color: #752d20;
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
		margin-bottom: 0;
	}

	button {
		margin: 20px 0 10px 0;
	
		padding: 8px;
	
		border-radius: 5px;
		width: max-content;
		font-size: 1.2rem;
	
		transition: background 100ms;
		
		:focus {
			outline: none;
		}

		background: #752d20; 
		color: white;
		border: 2px solid #752d20;

		@media (hover: hover) {
			:hover {
				filter: brightness(85%);
				cursor: pointer;
			}
		}
	}

	a {
		margin-right: 10px;
		padding: 7px 5px 5px 5px;

		border-radius: 2px;
		font-size: 2rem;

		transition: background 100ms;

		background: none;
		color: white;
		border: 0;

		:hover {
			background: #752d20;
			cursor: pointer;
		}

		:focus {
			outline: none;
		}
	}
`;



export default About;