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
			vehicles: [],
			likeList: [],
			helper: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people`)
					if (response.status === 200) {
						const data = await response.json()
						setStore({ ...getStore(), people: data.results })
					}
				} catch {
					(e => console.error(e))
				}
				// const URL = `https://www.swapi.tech/api/people`;
				// fetch(URL, { method: "GET" })
				// 	.then((response) => {
				// 		if (response.status === 200) {
				// 			return response.json()
				// 		}
				// 	})
				// 	.then((data) => {
				// 		console.log(data.results)
				// 		setStore({ people: data.results });
				// 	})
				// 	.catch((error) => console.log(error))
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
			getVehicles: async () => {
				const URL = `https://www.swapi.tech/api/vehicles`;
				try {
					const response = await fetch(URL, { method: "GET" })
					if (response.status === 200) {
						console.log(response.status)
						const data = await response.json()
						setStore({ ...getStore(), vehicles: data.results });
					}
				} catch {
					((error) => console(error))
				}
			},
			setLikeList: (name, id) => {
				setStore({ ...getStore(), likeList: [...getStore().likeList, { name: name, id: id, like: true }] })
				console.log(getStore().likeList)
			},
			filterLikeList: (id, name) => {
				setStore({ ...getStore(), likeList: getStore().likeList.filter((e) => e.id !== id && e.name !== name) })
				console.log(getStore().likeList)
			},
			getData: async (type, id) => {
				if (type === 'characters') type = 'people';
				console.log(type, id)
				const url = `https://www.swapi.tech/api/${type}/${id}`
				try {
					const response = await fetch(url)
					console.log(response)
					// if (response === 200) {
					const data = await response.json()
					console.log(url)
					console.log(data.result)
					setStore({ helper: data.result })
					return
					// }
				} catch {
					(e => console.error(e))
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
