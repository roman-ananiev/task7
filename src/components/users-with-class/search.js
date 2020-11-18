import React from "react";
import PropTypes from 'prop-types'


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	componentDidMount() {
		this.inputRef.focus()
	}
	
	onChangeHandle=(event)=>{
		const term = event.target.value
		this.setState({term})
		this.props.onUpdateSearch(term)
	}
	
	render() {
		return(
			<div>
				<input
					type="text"
					className="form-control search-input"
					placeholder="Поиск по записям"
					onChange={this.onChangeHandle}
					ref={(inputRef) => this.inputRef = inputRef}
				/>
			</div>
		)
	}
	
}
Search.propTypes ={
	onUpdateSearch: PropTypes.func,
}

export default Search