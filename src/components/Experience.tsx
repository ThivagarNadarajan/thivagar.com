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
					duration={'07/2020 - 08/2021'}
				/>
				<Collapsible
					role={'QA Software Developer'}
					company={'Canadian Institutes of Health Research'}
					description={['lalala', 'tesadva', 'lorem ipsum lol']}
					duration={'01/2017 - 04/2017'}
				/>
			</Collapsibles>
		</Section>
	);
};

const Section = styled.div`
	margin-bottom: 30px;
`;

const Collapsibles = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 20px;
`;

export default Experience;