import React from 'react';
import styled from 'styled-components';

//TODO: get image to put here
//TODO: rm <br/> when done
const About = (): JSX.Element => {
	return (
		<Container>
			<h3>Hello, I&apos;m</h3>
			<h1>Thivagar Nadarajan</h1>
			<h4>I&apos;m a freelance web developer</h4>
			<br />
		</Container>
	);
};

const Container = styled.div`

	height: 100vh;
	margin-top: 50vh;

	h1, h3, h4 {
		margin: 0;
	}
`;



export default About;