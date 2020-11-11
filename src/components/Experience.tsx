import React from 'react';
import styled from 'styled-components';

import Collapsible from './Collapsible';

const Experience = (): JSX.Element => {
	return (
		<Section>
			<h1>Experience</h1>
			<Collapsible
				title={'Environment & Climate Change Canada'}
				description={'placeholder description lorem ipsum blah blah'}
			/>
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