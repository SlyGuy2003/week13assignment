import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <h3>Login here:</h3>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
            </form>
        )
    }
}
