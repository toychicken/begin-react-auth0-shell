import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Todos = () => {

	const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
	const [todoList, setTodolist] = useState(null);

	useEffect(() => {

		const getTodos = async () => {
			const domain = "dg-begin-shell.eu.auth0.com";

			const accessToken = await getAccessTokenSilently({
				audience: `https://${domain}/api/v2/`,
				scope: "read:current_user",
			});

			try {
				let data = await fetch('http://localhost:3000/todos', {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
				let out = await data.json();
				console.log('Getting things to do ', out);
			} catch (e) {
				console.log(e.message);
			}
		};

		getTodos();
	}, [user]);


	return (
		<>
			<h2>To do</h2>
		<ul>
		</ul>
			<p>If you can see this... something's working</p>
		</>

	)
}

export default Todos;