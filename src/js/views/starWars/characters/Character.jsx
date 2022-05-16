import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { people } from "../../../apiStarWars.js";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Character = () => {
	const params = useParams();
	const [character, setCharacter] = useState({});
	people.getById(params.id).then((res) => setCharacter(res));

	function getCharacter() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="img-fluid"
					src={character.img}
					variant="top"
					width="180"
					height="100"
				/>
				<Card.Body>
					<Card.Title>{character.name}</Card.Title>
					<h5>Height: {character.height}</h5>
					<h5>Mass: {character.mass}</h5>
					<h5>Hair color: {character.hair_color}</h5>
					<h5>Eye color: {character.eye_color}</h5>
					<h5>Birth year: {character.birth_year}</h5>
					<h5>Gender: {character.gender}</h5>
					<Link
						className="btn btn-outline-info mx-2"
						to={`/people`}>
						Go back
					</Link>
				
				</Card.Body>
			</Card>
		);
	}

	return <div>{getCharacter()}</div>;
};

export default Character;
