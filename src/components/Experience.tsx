import React from 'react';
import styled from 'styled-components';

import Collapsible from './Collapsible';
import Section from '../styles/Section';

const Experience = (): JSX.Element => {
	return (
		<StyledSection>
			<h1>Experience</h1>
			<Collapsibles>
				<Collapsible
					role={'Software Developer Intern'}
					company={'Environment & Climate Change Canada'}
					description={['lalala', 'tesadva', 'lorem ipsum lol']}
				/>
			</Collapsibles>
		</StyledSection>
	);
};

const StyledSection = styled(Section)`
	margin-bottom: 30px;
`;

const Collapsibles = styled.div`
	margin-top: 25px;
`;

export default Experience;