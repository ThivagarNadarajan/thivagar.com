import React, { useState } from 'react';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

import { colors } from '../../styles';

const Collapsible: React.FC<{
	role: string,
	company: string,
	description: string[],
	duration: string,
	isFirst?: boolean,
	isLast?: boolean
}>
	= ({
		role,
		company,
		description,
		duration,
		isFirst = false,
		isLast = false }
	): JSX.Element => {
		const [collapse, setCollapse] = useState(true);
		const toggleCollapse = () => setCollapse(!collapse);

		return (
			<div>
				<Dot></Dot>
				<Container isFirst={isFirst} isLast={isLast}>
					<div className="verticalLine"></div>
					<div className="head" onClick={toggleCollapse}>
						<div>
							<h2>{company}</h2>
							<h3>{role}</h3>
							<h4>{duration}</h4>
						</div>
					</div>
					<AnimateHeight
						className="body"
						duration={250}
						height={collapse ? 0 : 'auto'}
						aria-hidden={true}
					>
						<div>
							<ul>
								{description.map(d => <li key={d}>{d}</li>)}
							</ul>
						</div>
					</AnimateHeight>
				</Container>
			</div>
		);
	};

const Dot = styled.span`
	height: 15px;
	width: 15px;
	background-color: ${colors.accent};
	position: absolute;
	border-radius: 50%;
	transform: translateX(-5.5px) translateY(33.5px);

`;

const Container = styled.div<{ isFirst: boolean, isLast: boolean }>`
	width: 100% - 10px;
	overflow: hidden;
	position: relative;

	.verticalLine {
		border-left: 4px solid ${colors.accent};
		position: absolute;
		top: ${props => props.isFirst ? '41px' : '0'};
		bottom: 0;
		height: ${props => props.isLast ? '41px' : ''};
	}

	.head {
		margin-left: 10px;
		padding: 10px;

		@media only screen and (max-width: 600px) {
			grid-template-columns: 1fr;

			button {
				display: none;
			}
		}

		transition: color 100ms;

		:hover {
			color: ${colors.accentHover};
			cursor: pointer;
		}
	}

	.body {
		margin: 0;
		padding: 10px 5px;
	}

	h2 {
		font-size: 28px;
		font-weight: 400;
	}

	h3 {
		font-size: 25px;
		font-weight: 300;
	}
	 
	h4 {
		font-size: 20px;
		font-weight: 300;
	}

	ul {
		margin: 0;
		font-size: 18px;
	}

	li {
		margin-bottom: 5px;
	}

	button {
		color: ${colors.font};
		background: none;
		border: none;
		font-size: 30px;

		:hover {	
			cursor: pointer;
		}

		:focus {
			outline: none;
		}
	}
`;

export default Collapsible;