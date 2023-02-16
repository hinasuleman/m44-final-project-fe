import React from "react";
import {
  Box,
  Container,
  Row,
  HeaderLink,
  Heading,
} from "./HeaderStyles";

const Header = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		BiblioTech
	</h1>
	<Container>
		<Row>
      <Heading>Social Media</Heading>
			<HeaderLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</HeaderLink>
			<HeaderLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</HeaderLink>
			<HeaderLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</HeaderLink>
			<HeaderLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</HeaderLink>
		</Row>
	</Container>
	</Box>
);
};
export default Header;


