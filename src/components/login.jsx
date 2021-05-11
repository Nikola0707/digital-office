import React, { useState } from 'react'
//Redux
import { useDispatch } from 'react-redux'
import { saveSessionIdAction } from '../redux/loginStore'

const axios = require('axios');

const Login = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const saveInput = (e) => {
        const { name, value } = e.target

        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }
    const loginCred = (e) => {
        axios.post('https://test.digitaloffice.mk/api/auth/Credentials', {
            username: username,
            password: password
          })
          .then(function (response) {
            const responseSessionId = response.data.Result.SessionId;
            // Save the session id in to redux store, for using globaly
            dispatch(saveSessionIdAction(responseSessionId))
            console.log(responseSessionId);            
          })
          .catch(function (error) {
            console.log(error);
          });
         e.preventDefault();
        setUsername('');
        setPassword('');
    }

    return (
        <form>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={saveInput}
                    className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={saveInput} className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={loginCred}>Sign in</button>
        </form>
    )
}

export default Login;