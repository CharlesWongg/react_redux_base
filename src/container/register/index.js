import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as registerAction from '../../actions/Register'

class RegisterApp extends React.Component {
	componentWillMount() {
		const { actions } = this.props;
		setTimeout(() => {
			actions.setName({name: 'Ben'});
		}, 300);
	}	
	
	render() {
		return (
			<h2>注册页  {this.props.name}</h2>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.user.name
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(registerAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterApp);