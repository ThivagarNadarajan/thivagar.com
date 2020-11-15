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
					description={
						[
							'Followed client specifications to design mockups in Balsamiq, '
							+ 'for up-coming web applications',
							'Implemented an internal query feature to help search '
							+ 'through millions of data payloads',
							'Conduct data validation & regression testing every release to '
							+ 'identify any issues within components'
						]}
					duration={'07/2020 - 08/2021'}
				/>
				<Collapsible
					role={'QA Software Developer'}
					company={'Canadian Institutes of Health Research'}
					description={
						[
							'Developed and maintained plugins for Customer Relationship '
							+ 'Management tool (CRM) using JavaScript and C',
							'Conducted quality assurance testing on CRM prototype prior'
							+ 'to scheduled completion',
							'Tested and evaluated the organization\'s websites to ensure '
							+ 'they met accessibility requirements for those with disabilities'
						]}
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