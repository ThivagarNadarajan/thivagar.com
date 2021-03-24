import React from 'react';
import styled from 'styled-components';

import Collapsible from './Collapsible';
import jobs from './jobs';

const Experience = (): JSX.Element =>
	<Section>
		<h1>Experience</h1>
		<Collapsibles>
			{
				jobs.map(({ role, company, description, duration }, idx) =>
					<Collapsible
						key={idx}
						role={role}
						company={company}
						duration={duration}
						description={description}
						isFirst={idx === 0}
						isLast={idx === jobs.length - 1}
					/>
				)
			}
		</Collapsibles>
	</Section>;

const Section = styled.div`
	margin-bottom: 30px;
`;

const Collapsibles = styled.div`
	margin-top: 25px;
`;

export default Experience;