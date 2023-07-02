import styled from 'styled-components';

export const Box = styled.div`

background: black;
bottom: 0;
width: 100%;
height: 100%;
@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
    position: relative;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: whitesmoke;
margin-bottom: 10px;
font-size: 10px;
text-decoration: none;
text-align: center;
&:hover {
	color: wheat;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 15px;
color: goldenrod;
font-weight: bold;
margin-bottom: 20px;
text-align: center;[]
`;
