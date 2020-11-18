import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = props => {
	return (
		<React.Fragment>
			<li className='list-group-item'>
				<p><b>Name:</b> {props.name}</p>
				<p><b>Username:</b> {props.username}</p>
				<p><b>Mail:</b> {props.email}</p>
			</li>
		</React.Fragment>
	)
}
UserInfo.propTypes = {
	name: PropTypes.string,
	username: PropTypes.string,
	email: PropTypes.string
}
export default  UserInfo