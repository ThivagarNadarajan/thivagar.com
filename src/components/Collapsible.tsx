import React, { useState } from 'react';
import styled from 'styled-components';

//TODO: add the collapse animation
const Collapsible: React.FC<{ title: string, description: string }>
	= ({ title, description }): JSX.Element => {
		const [collapse, setCollapse] = useState(false);
		const toggleCollapse = () => setCollapse(!collapse);

		return (
			<Container>
				<div>
					{title}
					<button onClick={toggleCollapse}>+</button>
				</div>
				{collapse
					? <p>{description}</p>
					: <></>
				}
			</Container>
		);
	};

const Container = styled.div`
	width: 100% - 10px;
	div {
		background: #2f3040;
		padding: 10px;

	}

	button {
		float: right;
		margin-right: 5px;
	}
`;

export default Collapsible;