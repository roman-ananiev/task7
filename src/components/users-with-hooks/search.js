import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'


const Search = (props) => {
	const [input, setInput] = useState('')
	const inputRef = React.createRef()
	
	const onChangeHandle =(event)=>{
		setInput(event.target.value)
		props.onUpdateSearch(input)
	}
	
	useEffect(() => {
		inputRef.current.focus()
	},[inputRef.current])
	
		return(
			<div>
				<input
					type="text"
					className="form-control search-input"
					placeholder="Поиск по записям"
					onChange={onChangeHandle}
					value={input}
					ref={inputRef}
				/>
			</div>
		)
}
Search.propTypes ={
	onUpdateSearch: PropTypes.func,
}

export default Search
