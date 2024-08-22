const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: () => {
				const URL = `https://www.swapi.tech/api/people`;
				fetch(URL, { method: "GET" })
					.then((response) => {
						if (response.status === 200) {
							return response.json()
						}
					})
					.then((data) => {
						console.log(data.results)
						setStore({ people: data.results });
					})
					.catch((error) => console.log(error))
			},
			getPlanets: () => {
				const URL = `https://www.swapi.tech/api/planets`;
				fetch(
					URL, {
					method: "GET"
				}
				)
					.then((response) => {
						if (response.status === 200) {
							return response.json()
						}
					})
					.then((data) => {
						setStore({ ...getStore(), planets: data.results });
					})
					.catch((error) => console.log(error))
			},
			getVehicles: () => {
				const URL = `https://www.swapi.tech/api/vehicles`;
				try {
					const response = fetch(URL, { method: "GET" })
					if (response.status === 200) {
						const data = response.json()
						setStore({ ...getStore(), vehicles: data.results });
					}
				} catch {
					((error) => console(error))
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
