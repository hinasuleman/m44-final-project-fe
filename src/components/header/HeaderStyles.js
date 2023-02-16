import styled from 'styled-components';

export const Box = styled.div`
padding: 70px 50px;
background: Yellow;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 60px 20px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
}
`;

export const HeaderLink = styled.a`
color: Black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: Black;
margin-bottom: 20px;
font-weight: bold;
`;
