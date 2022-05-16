import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { vehicles } from "../../../apiStarWars.js";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Vehicle = () => {
	const params = useParams();
	const [vehicle, setVehicle] = useState({});
	vehicles.getById(params.id).then((res) => setVehicle(res));
	// useEffect(() => {}, [vehicle]);
	function getVehicle() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="img-fluid"
					src={vehicle.img}
					variant="top"
					width="180"
					height="100"
				/>
				<Card.Body>
					<Card.Title>{vehicle.name}</Card.Title>
					<h5>{vehicle.description}</h5>
					<h5>diameter: {vehicle.diameter}</h5>
					<h5>rotation_period: {vehicle.rotation_period}</h5>
					<h5>gravity: {vehicle.gravity}</h5>
					<Link
						className="btn btn-outline-info mx-2"
						to={`/vehicles/${vehicle.uid}`}>
						Go back
					</Link>
				
				</Card.Body>
			</Card>
		);
	}

	return <div>{getVehicle()}</div>;
};

export default Vehicle;
