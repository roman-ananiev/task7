import React, {Component} from 'react'
import './users-with-class.css'
import LoadService from "../../utils/load-service";
import Search from "./search";
import Spinner from "../spinner/spinner";
import UserInfo from './user-info'

class UsersWithClass extends Component {
	loadService = new LoadService();
	state = {
		users:[],
		term: '',
		loading: false
	}
	
	componentDidMount() {
		this.loadService.getAllPeople()
			.then(res => this.setState({users: res, loading: true}))
	}
	
	searchUsers = (items, term) => {
		if(term.length === 0) {
			return items
		}
		return items.filter( item => {
			return item.name.toUpperCase().match(term.toUpperCase())
		})
	}
	
	onUpdateSearch = (term) => {
		this.setState({term})
	}
	
	render(){
		const {users, term} = this.state
		const visibleUsers = this.searchUsers(users, term)
		
		const content = this.state.loading
			? visibleUsers.map(({ id, name, username, email}) => <UserInfo key={id} name={name} username={username} email={email}/>)
			: <Spinner/>
		
		return (
			<div className='container'>
				<h3>Реализовано с помощью Class</h3>
				<Search
					onUpdateSearch={this.onUpdateSearch}
				/>
				<ul className='list-group'>
					{content}
				</ul>
			</div>
		)
	}
}
export default UsersWithClass