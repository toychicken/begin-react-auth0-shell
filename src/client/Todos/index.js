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
				let items = await data.json();
				setTodolist(items);
			} catch (e) {
				console.log(e.message);
			}
		};

		getTodos();
	}, [user]);

	const List = () => {
		let output = [];
		todoList.map(item => {
			output.push(<li>
				* <pre>{`${JSON.stringify(item, null, 2)}`}</pre>
			</li>);
			return true;
		})
	}

	return (
		<>
			<h2>To dos</h2>
		<ul>
			{

			}
		</ul>
			<p>If you can see this... something's working</p>
		</>

	)
}

export default Todos;