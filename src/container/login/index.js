import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as loginAction from '../../actions/Login'

class LoginApp extends React.Component {
	componentWillMount() {
		const { actions } = this.props;
		setTimeout(() => {
			actions.setMsg({message: 'Succ~'});
		}, 300);
	}
	
	render() {
		return (
			<h2>登录页 {this.props.message}</h2>
		)
	}
}

const mapStateToProps = state => {
	return {
		message: state.login.message
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(loginAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);