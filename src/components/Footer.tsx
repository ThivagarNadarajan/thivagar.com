import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles';

import { InlineIcon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxEnvelope from '@iconify-icons/bx/bx-envelope';

const Footer = (): JSX.Element =>
	<>
		<Ruler />
		<Section>
			<div>
				<a
					href='https://www.linkedin.com/in/thivagar-nadarajan'
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={bxlLinkedin} />
				</a>
				<a
					href='https://github.com/ThivagarNadarajan'
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={githubFilled} />
				</a>
				<a href='mailto:thiv.nadarajan@gmail.com'>
					<InlineIcon icon={bxEnvelope} />
				</a>
			</div>
			<p>© {(new Date()).getFullYear()} Thivagar Nadarajan</p>
		</Section>
	</>;


const Ruler = styled.hr`
	background: ${colors.fg};
	border: ${colors.fg};
	height: 3px;
	margin: 0;
`;

const Section = styled.div`
	padding: 20px 0 20px 0;

	@media only screen and (max-width: 600px) {
		text-align: center;
	}

	div {
		margin-bottom: 20px;
		@media only screen and (min-width: 600px) {
			float: right;
			margin: 0;
		}
	}

	p {
		margin: 0;
		font-size: 17px;
		font-weight: 100;
	}

	a {
		margin-right: 10px;
		background: none;
		border: none;

		color: ${colors.fg};
		font-size: 20px;

		transition: background 100ms;

		:hover {
			color: ${colors.font};
			cursor: pointer;
		}

		:focus {
			outline: none;
		}
	}
`;


export default Footer;