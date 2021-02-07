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
							'Designed mockups in Balsamiq for up-coming web applications by '
							+ 'following client specifications',
							'Implemented an internal query feature to help search '
							+ 'through millions of data payloads',
							'Conduct data validation & regression testing every release to '
							+ 'identify any issues within components'
						]}
					duration={'07/2020 - 08/2021'}
					isFirst={true}
				/>
				<Collapsible
					role={'Contract Software Developer'}
					company={'IT Collaborative Inc.'}
					description={
						[
							'Used SwiftUI to build authentication, profile & '
							+ 'settings screens for company iOS application',
							'Deployed multiple builds to TestFlight for internal testing',
							'Built backend with Firebase suite, incorporating '
							+ 'Node.js Cloud Functions, Firestore, Security Rules, '
							+ 'among other Firebase tools',
						]}
					duration={'12/2020 - 02/2021'}
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
					isLast={true}
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
`;

export default Experience;