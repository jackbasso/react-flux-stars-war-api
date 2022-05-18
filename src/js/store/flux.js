const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			stared: [],
			planets: [],
			characters: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			agregarFavorito: (newStared) => {
				const store = getStore();
				setStore({ stared: [...store.stared, newStared] });
			},
			eliminarFavorito: (name) => {
				const store = getStore();
				setStore({
					stared: store.stared.filter((item) => item.name !== name),
				});
			},
		},
	};
};

export default getState;

