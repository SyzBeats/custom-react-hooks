import React from "react";
import { AppState } from "./state";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import green from "./green.png";
import Inc from "./components/Inc";
import Toggle from "./components/Toggle";
import Mount from "./components/Mount";
import Hover from "./components/Hover";
import Nav from "./components/Nav";
import Cookie from "./components/Cookie";

function App() {
	return (
		<AppState>
			<Header>
				<Menu />
				<h1>Header</h1>
			</Header>
			<Nav />
			<Container>
				<Toggle />
				<Mount />
				<Inc />
				<Cookie />
				<h2>Cards</h2>
				<CardGrid>
					<Hover />
					<Card style={{ background: "var(--purp)" }}>
						<h3>Some card</h3>
						<img alt="img" src={purp} />
					</Card>
					<Card style={{ background: "var(--blue)" }}>
						<h3>Some card</h3>
						<img alt="img" src={blue} />
					</Card>
					<Card style={{ background: "var(--green)" }}>
						<h3>Some card</h3>
						<img alt="img" src={green} />
					</Card>
				</CardGrid>
			</Container>
		</AppState>
	);
}

export default App;
