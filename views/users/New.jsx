const React = require('react')
const Layout = require('../components/Layout.jsx')

class NewUser extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>New User</h1>
                    <form action="/users/" method="POST" class="form-group">
                        User Name: <input type="text" name="username" class="form-group"/>
                        <br/>
                        Password: <input type="password" name="password" class="form-group"/>
                        <br/>
                        Location: <input type="text" name="location" class="form-group"/>
                        <br/>
                        <input type="submit" value="Create User" class="btn"/>
                        <a href="/plants" class="btn">Maybe Later</a>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = NewUser