const React = require('react')
const Layout = require('../components/Layout.jsx')

class NewUser extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>New User</h1>
                    <form action="/users/" method="POST" class="form-group">
                        User Name: <input type="text" name="username" class="form-group" autoFocus/>
                        <br/>
                        Password: <input type="password" name="password" class="form-group"/>
                        <br/>
                        Location: <input type="text" name="location" class="form-group"/>
                        <br/>
                        Swap Method:<select id="swapMethod" name="swapMethod">
                    <option value="deliver">Can Deliver</option>
                    <option value="pickup">Pickup Only</option>
                    <option value="any">Pickup or Delivery</option>
                </select><br/>
                <input type="submit" value="Create User" class="btn"/>
                        <a href="/plants" class="btn">Maybe Later</a>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = NewUser