import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { vehicles } from "../../../apiStarWars.js";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Vehicle = () => {
	const params = useParams();
	const [vehicle, setVehicle] = useState({});
	vehicles.getById(params.id).then((res) => setVehicle(res));
	// useEffect(() => {}, [vehicle]);
	function getVehicle() {
		return (
			<Container>
				<Row>
					<Col>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="img-fluid"
					src={vehicle.img}
					variant="top"
					width="180"
					height="100"
				/>
				<Card.Body>
				<Card.Title><h3>Details</h3></Card.Title>
					<h5>Cargo capacity: {vehicle.cargo_capacity}</h5>
					<h5>Consumables: {vehicle.consumables}</h5>
					<h5>Crew: {vehicle.crew}</h5>
					<h5>Length: {vehicle.length}</h5>
					<h5>Manufacturer: {vehicle.manufacturer}</h5>
					<h5>Model: {vehicle.model}</h5>
					<Link
						className="btn btn-outline-info mx-2"
						to={`/vehicles`}>
						Go back
					</Link>
				
				</Card.Body>
			</Card>
			</Col>
					<Col>
					<h1>{vehicle.name}</h1>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
						classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
						professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
						consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
						literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
						of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
						This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
						 of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					</p>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
						classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
						professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
						consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
						literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
						of "de Finibus Bonorum et Malorum", very popular during the Renaissance. The first line
						 of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					</p>
					</Col>
				</Row>
			</Container>

		);
	}

	return <div>{getVehicle()}</div>;
};

export default Vehicle;
