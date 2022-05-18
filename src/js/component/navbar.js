import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	function cargarFavoritos() {
		return store.stared.map((item) => <Dropdown.Item key={item.name} href="#/action-1">{item.name}</Dropdown.Item>);
	}
	function descargarFavoritos(name) {
		actions.eliminarFavorito(name)
		return store.stared.map((item) => <Dropdown.Item key={item.name} href="#/action-1">{item.name}</Dropdown.Item>);
	}

return (
	<nav className="navbar navbar-light bg-light mb-3">
		<Link to="/">
			<span className="navbar-brand mb-0 h1">Star Wars React/Flux</span>
		</Link>
		<div className="ml-auto">
			<Link to="/peoples">
				<button className="btn btn-outline-secondary mx-2">Characters</button>
			</Link>
			<Link to="/planets">
				<button className="btn btn-outline-secondary mx-2">Planets</button>
			</Link>
			<Link to="/vehicles">
				<button className="btn btn-outline-secondary mx-2">Vehicles</button>
			</Link>
			<DropdownButton className="btn btn-outline-secondary mx-2" variant="danger" id="dropdown-basic-button" title="Your favorites">
			<span onClick={()=> descargarFavoritos('R2-D2')}>{cargarFavoritos()}</span>
			</DropdownButton>

		</div>
	</nav>
);
};
