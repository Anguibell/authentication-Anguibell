const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async(info) => {
				try {
					const response = await fetch('https://3001-anguibell-authenticatio-g4ev9pvoai4.ws-us117.gitpod.io/api/login', {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify(info)
					}) 
					console.log(response)
					if (response.status==401) {
						return false
					}
					const data = await response.json()
					console.log(data)
					localStorage.setItem("token", data.access_token)
					setStore({auth: true})
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			}, 
			logout: () => {
				localStorage.removeItem("token")
				setStore({auth: false})
			}
		}
	};
};

export default getState;
