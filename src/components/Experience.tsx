import React from 'react';
import styled from 'styled-components';

const Experience = (): JSX.Element => {
	return (
		<Section>
			<div className="grid">
				<div>
					<h1>Experience</h1>
					<h2>Computer Science Student &amp; Freelance Web Developer</h2>
					<p>
						Hi there! I&apos;m a freelance web developer and a senior at the University
						of Toronto studying Computer Science. Currently interning at
						Environment &amp; Climate Change Canada.
					</p>
				</div>
			</div>
		</Section>
	);
};

const Section = styled.div`
	h1 {
		font-size: 50px;
		font-weight: 400;
	}

	margin-bottom: 30px;
`;



export default Experience;