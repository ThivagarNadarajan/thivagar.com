import React, { useState } from 'react';
import styled from 'styled-components';

import { InlineIcon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';

//TODO: change font weights and maybe the font colors of certain headers
const Collapsible: React.FC<{
	role: string,
	company: string,
	description: string[],
	duration: string
}>
	= ({ role, company, description, duration }): JSX.Element => {
		const [collapse, setCollapse] = useState(true);
		const toggleCollapse = () => setCollapse(!collapse);

		return (
			<Container>
				<div className="head">
					<div>
						<h2>{company}</h2>
						<h3>{role}</h3>
						<h4>{duration}</h4>
					</div>
					<button onClick={toggleCollapse}>
						<InlineIcon icon={arrowDownAlt2} />
					</button>
				</div>
				{collapse
					? <></>
					: (
						<div className="body">
							<ul>
								{description.map(d => <li key={d}>{d}</li>)}
							</ul>
						</div>
					)
				}
			</Container>
		);
	};

const Container = styled.div`
	width: 100% - 10px;
	border-radius: 2px;
	overflow: hidden;
	
	.head {
		background: #2f3040;
		padding: 10px;
		display: grid;
		grid-template-columns: 10fr 1fr;
	}

	h2 {
		font-size: 22px;
	}

	h3 {
		font-size: 17px;
	}
	 
	h4 {
		font-family: Roboto;
		font-weight: 100;
		font-size: 15px;
	}

	.body {
		margin: 0;
		padding: 10px;
		background: #3f4157;
	}

	ul {
		margin: 0;
	}

	button {
		color: white;
		background: none;
		border: none;
		font-size: 30px;

		height: max-content;
		width: max-content;

		margin: auto;
		float: right;

		@media (hover: hover) {
			:hover {
				color: #752d20;
				cursor: pointer;
			}
		}

		:focus {
			outline: none;
		}
	}
`;

export default Collapsible;