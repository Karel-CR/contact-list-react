const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			individualContact: {
			  full_name: "",
			  email: "",
			  agenda_slug: "LeonelRivera",
			  address: "",
			  phone: "",
			},
		},
		actions: {
			getContactList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/LeonelRivera")
					.then((response) => response.json())
					.then((data) => {
						// Accede a data.individualContact
						if (data.individualContact && Array.isArray(data.individualContact)) {
							setStore({ contactList: data.individualContact });
						} else {
							console.error("La respuesta de la API no contiene un array de contactos:", data);
						}
					})
					.catch((error) => console.log("Error fetching contact list:", error));
			},
			//Submit a new contact
			handleSubmit: (contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact),
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error("Network response was not ok");
						}
						return response.json();
					})
					.then((data) => {
						console.log(data);
						getActions().getContactList(); // Actualiza la lista de contactos
					})
					.catch((error) => console.error("Error:", error));
			},
			// Modify an existing user
			handleSubmitModify: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact),
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error("Network response was not ok");
						}
						return response.json();
					})
					.then((data) => {
						console.log(data);
						getActions().getContactList(); // Actualiza la lista de contactos
					})
					.catch((error) => console.error("Error:", error));
			},
			//Delete an existing user
			deleteContact: (theid) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${theid}`, {
					method: "DELETE",
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						getActions().getContactList(); // Actualiza la lista de contactos
					})
					.catch((error) => console.log(error));
			},
		}
	};
};

export default getState;
