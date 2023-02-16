import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px 5px;
  background: rgb(239, 233, 219, 100%);
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 20px 15px;
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

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 30px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(195px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(70px, 1fr));
}
`;

export const FooterLink = styled.a`
color: Black;
margin-bottom: 10px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 14px;
color: Black;
margin-bottom: 10px;
font-weight: bold;
`;
