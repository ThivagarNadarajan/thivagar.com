import React from 'react';
import styled from 'styled-components';

const Card: React.FC<{ imgSrc: string, title: string, info: string, tags: string[] }>
	= ({ imgSrc, title, info, tags }): JSX.Element => {
		return (
			<Container>
				<img src={imgSrc} />
				<div className="info">
					<h2>{title}</h2>
					<p>{info}</p>
					<div className="tags">
						{tags.map(tag => <span key={tag}>{tag}</span>)}
					</div>
				</div>
			</Container>
		);
	};

const Container = styled.div`
	background: #2f3040;
	overflow: hidden;
	width: 100%;
	border-radius: 2px;
	box-shadow: 0px 0px 10px 3px #171717;

	display: flex;
	flex-direction: column;

	img {
		width: 100%;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4.5% 4.5% 0 4.5%;
	}

	span {
		background: #4d5769;

		display: inline-block;
		
		width: max-content;
		padding: 6px;
		margin-right: 7px;
		margin-bottom: 4.5%;

		border-radius: 3px;
		font-size: small;
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