import React from 'react'
import {Route, Switch} from "react-router-dom";
import UsersWithHooks from "../components/users-with-hooks/users-with-hooks";
import UsersWithClass from "../components/users-with-class/users-with-class";

export default () => {
	return(
		<Switch>
			<Route exact path='/hooks' component={UsersWithHooks} />
			<Route path='/class' component={UsersWithClass} />
		</Switch>
	)
}