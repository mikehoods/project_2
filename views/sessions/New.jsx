const React = require('react')
const Layout = require('../components/Layout.jsx')

class LoginUser extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Login</h1>
                    <form action="/sessions/" method="POST" class="form-group">
                        User Name: <input type="text" name="username" class="form-control"/><br/>
                        Password: <input type="password" name="password" class="form-control"/><br/>
                        <input type="submit" name="" value="Login" class="btn"/>
                    </form>
                </div>
            </Layout>
        )
    }
}
module.exports = LoginUser