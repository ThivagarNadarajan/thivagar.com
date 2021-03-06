import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles';

const Card: React.FC<{
	imgSrc: string,
	title: string,
	link: string,
	info: string,
	tags: string[]
}>
	= ({ imgSrc, title, info, tags, link }): JSX.Element =>
		<Container href={link} target='_blank'>
			<img src={imgSrc} />
			<div className="info">
				<h2>{title}</h2>
				<p>{info}</p>
				<div className="tags">
					{tags.map(tag => <span key={tag}>{tag}</span>)}
				</div>
			</div>
		</Container>;


const Container = styled.a`
	text-decoration: none;
	color: ${colors.font};
	background: ${colors.fg};
	overflow: hidden;
	width: 100%;
	border-radius: 2px;
	box-shadow: 0px 0px 10px 3px #171717;

	display: flex;
	flex-direction: column;

	h2 {
		font-weight: 400;
		font-size: 28px;
	}

	:hover {
		background: ${colors.fgLight};
		transition: background 200ms;
	}

	img {
		width: 100%;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4.5% 4.5% 0 4.5%;
		font-size: 18px;
	}

	span {
		display: inline-block;
		margin-right: 7px;

		background: ${colors.accent};

		padding: 6px;
		border-radius: 3px;
		font-size: medium;
		width: max-content;

		margin-bottom: 4.5%;
	
	}

	@media only screen and (min-width: 0) and (max-width: 1240px) {
		.info {
			height: 100%;
		}
	}

	@media only screen and (min-width: 1241px) and (max-width: 1525px) {
		display: grid;
		grid-template-columns: 2fr 3fr;

		.info {
			height: 100% - 3% - 6px;
			padding: 3% 3% 0 3%;
		}

		span {
			margin-bottom: 3%;
		}
	}

	@media only screen and (min-width: 1526px) {
		.info {
			height: 100%;
		}
	}
`;



export default Card;