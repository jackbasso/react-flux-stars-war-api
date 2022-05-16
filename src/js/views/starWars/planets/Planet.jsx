import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { planets } from "../../../apiStarWars.js";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Planet = () => {
	const params = useParams();
	const [planet, setPlanet] = useState({});
	planets.getById(params.id).then((res) => setPlanet(res));
	// useEffect(() => {}, [planet]);
	function getPlanet() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="img-fluid"
					src={planet.img}
					variant="top"
					width="180"
					height="100"
				/>
				<Card.Body>
					<Card.Title>{planet.name}</Card.Title>
					<h5>Description: {planet.description}</h5>
					<h5>Diameter: {planet.diameter}</h5>
					<h5>Rotation period: {planet.rotation_period}</h5>
					<h5>Gravity: {planet.gravity}</h5>
					<Link
						className="btn btn-outline-info mx-2"
						to={`/planets`}>
						Go back
					</Link>
				
				</Card.Body>
			</Card>
		);
	}

	return <div>{getPlanet()}</div>;
};

export default Planet;
