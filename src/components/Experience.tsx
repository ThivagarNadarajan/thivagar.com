import React from 'react';
import styled from 'styled-components';

import Collapsible from './Collapsible';

const Experience = (): JSX.Element => {
	return (
		<Section>
			<h1>Experience</h1>
			<Collapsibles>
				<Collapsible
					role={'Software Developer Intern'}
					company={'Environment & Climate Change Canada'}
					description={['lalala', 'tesadva', 'lorem ipsum lol']}
				/>
			</Collapsibles>
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

const Collapsibles = styled.div`
	margin-top: 25px;
`;

export default Experience;