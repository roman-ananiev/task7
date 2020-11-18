import React, {useEffect, useState} from 'react'
import './users-with-hooks.css'
import Spinner from "../spinner/spinner";
import UserInfo from "../users-with-hooks/user-info";
import Search from "./search";

export default function UsersWithHooks() {
	
	const API_URL = `https://jsonplaceholder.typicode.com/users`
	const [input, setInput] = useState('')
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		loadData();
	}, []);
	
	const loadData = async () => {
		const response = await fetch(API_URL);
		const data = await response.json();
		setUsers(data);
		setLoading(true)
	}
	
	const onUpdateSearch = (value) => {
		setInput(value)
	}
	
	const updateUsers = (someInput, array) => {
		if(someInput.length > 0){
			return (array.filter((i) => i.name.toUpperCase().match(input.toUpperCase()))
			)
		} else  return array
	}
	
	const visibleUsers = updateUsers(input, users)
	const content = loading
		? visibleUsers.map(({ id, name, username, email}) => <UserInfo key={id} name={name} username={username} email={email}/>)
		: <Spinner/>
		
	return (
		<div className='container'>
			<h3>Реализовано с помощью Hooks</h3>
			<Search onUpdateSearch={onUpdateSearch}/>
			<div>
				<ul className='list-group'>
					{content}
				</ul>
			</div>
		</div>
	)
}
