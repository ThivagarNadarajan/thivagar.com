import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../styles';

import { InlineIcon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';

//TODO: change font weights and maybe the font colors of certain headers
//TODO: change body color or something
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
				<div className="head" onClick={toggleCollapse}>
					<div>
						<h2>{company}</h2>
						<h3>{role}</h3>
						<h4>{duration}</h4>
					</div>
					<button><InlineIcon icon={arrowDownAlt2} /></button>
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
		background: ${colors.bg};
		padding: 10px;
		display: grid;
		grid-template-columns: 10fr 1fr;

		@media only screen and (max-width: 600px) {
			grid-template-columns: 1fr;

			button {
				display: none;
			}
		}

		transition: background 100ms;

		@media (hover: hover) {
			:hover {	
				background: ${colors.fg};
				cursor: pointer;
			}
		}
	}

	h2 {
		font-size: 22px;
	}

	h3 {
		font-size: 17px;
	}
	 
	h4 {
		font-weight: 100;
		font-size: 15px;
	}

	.body {
		margin: 0;
		padding: 10px;
		background: ${colors.fg};
	}

	ul {
		margin: 0;
	}

	button {
		color: ${colors.font};
		background: none;
		border: none;
		border-radius: 3px;
		font-size: 30px;

		margin: auto;
		width: 100%;
		height: 100%;
		padding-top: 5%;

		:focus {
			outline: none;
		}
	}
`;

export default Collapsible;