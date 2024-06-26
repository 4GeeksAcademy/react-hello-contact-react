const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			contacts:[],
			contact:{}
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
				// setStore({ demo: demo });
			// },
			loadContacts : ()=>{
				fetch("https://playground.4geeks.com/contact/agendas/omar")
				.then((response)=>{
					return response.json()
				})
				.then((data)=>{
					setStore({contacts:data.contacts})
					console.log();


				})
				.catch((error)=>{
					console.log(error);

				})

			},
			seeContact: (contact) => {
				setStore({contact:contact})

			},
			
			// addContact: (contact) => {
			// 	setStore({contact:contact})

			// }
		}
	};
};

export default getState;
