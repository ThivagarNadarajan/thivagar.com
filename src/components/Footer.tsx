import React from 'react';
import styled from 'styled-components';

import Section from '../styles/Section';

const Footer = (): JSX.Element => {
	return (
		<StyledFooter>
			<SectionStyles>
				<p>test description</p>
			</SectionStyles>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	// background: #1d1d26;
	background: #262642;
`;

const SectionStyles = styled(Section)`
	padding: 10px;

	p {
		margin: auto;
	}

`;


export default Footer;