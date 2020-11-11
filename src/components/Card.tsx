import React from 'react';
import styled from 'styled-components';

//TODO: send tags to the bottom of the page
//TODO: box shadows
const Card: React.FC<{ imgSrc: string, title: string, info: string, tags: string[] }>
	= ({ imgSrc, title, info, tags }): JSX.Element => {
		return (
			<Container>
				<img src={imgSrc} />
				<div>
					<h2>{title}</h2>
					<p>{info}</p>
					{tags.map(tag => <span key={tag}>{tag}</span>)}
				</div>
			</Container>
		);
	};

const Container = styled.div`
	// background: #2c273d;
	background: #2f3040;
	overflow: hidden;
	width: 100%;
	border-radius: 2px;

	img {
		width: 100%;
	}

	div {
		margin: 5% 5% 3% 5%;
		height: max-content;
	}

	p {
		// color: #c1c7e6;
		color: white;
	}

	span {
		display: inline-block;
		margin-right: 7px;
		margin-bottom: 7px;
		background: #4d5769;
		padding: 6px;
		border-radius: 3px;
		font-size: small;
	}

	@media only screen and (min-width: 1200px) and (max-width: 1525px) {
		display: grid;
		grid-template-columns: 2fr 3fr;
	}
`;



export default Card;