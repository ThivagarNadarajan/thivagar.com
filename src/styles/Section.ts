import styled from 'styled-components';

const Section = styled.div`
	margin: auto;
	width: 60%;

	@media only screen and (max-width: 1200px) {
		width: 70%;
	}

	@media only screen and (max-width: 800px) {
		width: 85%;
	}
`;

export default Section;