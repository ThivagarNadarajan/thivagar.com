import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getJobs, JobInfo } from '../services/resumeService';
import Collapsible from './Collapsible';

const Experience = (): JSX.Element => {

	const [jobs, setJobs] = useState<JobInfo[]>([]);

	useEffect(() => {
		getJobs().then(jobs => {
			setJobs(jobs);
		});
	}, []);

	return (
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