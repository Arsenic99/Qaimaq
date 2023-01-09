import { useState } from 'react';
import '../assets/styles/admin.scss'
import axios from 'axios'

const Admin = (props) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const Auth = () => {
            axios.post('',{name, password})
                .then(function (response) {
                    // handle success
                    props.setUser(name);
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    
    return (
        <div className="d-flex justify-content-center align-items-center admin" style={{ height: "100vh" }}>
            {
                console.log(props)
            }
            <div className="container">
                <input type="text" placeholder='Имя пользователя' defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder='Пароль' defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={Auth}>Войти</button>
            </div>
        </div>
    );
}

export default Admin;