import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import Toggle from "./components/Toggle";
import Inc from "./components/Inc";
import "./App.css";
import Mount from "./components/Mount";
import Hover from "./components/Hover";
import AppState from "./components/AppState";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import green from "./green.png";
import Nav from "./components/Nav";

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
