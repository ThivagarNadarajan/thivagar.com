import React, { useState } from 'react';
import styled from 'styled-components';

//TODO: add the collapse animation
const Collapsible: React.FC<{ role: string, company: string, description: string[] }>
	= ({ role, company, description }): JSX.Element => {
		const [collapse, setCollapse] = useState(true);
		const toggleCollapse = () => setCollapse(!collapse);

		return (
			<Container collapse={collapse}>
				<div className="head">
					<div>
						<h2>{role}</h2>
						<h3>{company}</h3>
						<h4>Nov 10, 2020</h4>
					</div>
					<button onClick={toggleCollapse}>+</button>
				</div>
				<div className="body">
					<ul>
						{description.map(d => <li key={d}>{d}</li>)}
					</ul>
				</div>
			</Container>
		);
	};

interface ContainerProps { collapse: boolean }
const Container = styled.div<ContainerProps>`
	width: 100% - 10px;
	border-radius: 2px;
	overflow: hidden;
	
	.head {
		background: #2f3040;
		padding: 10px;
		display: grid;
		grid-template-columns: 10fr 1fr;
	}

	.body {
		margin: 0;
		background: #3f4157;
		transition: padding-top 0.3s;
		overflow: hidden;

		height: ${({ collapse }) => collapse ? '0;' : 'max-content; padding: 10px;'}
	}

	ul {
		margin: 0;
	}

	button {
		float: right;
	}
`;

export default Collapsible;