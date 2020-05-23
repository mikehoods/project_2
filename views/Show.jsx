const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Show extends Component {
    render() {
        const { itemname, qty, description, img } = this.props.plant
        const { plant } = this.props
        const loggedIn = (
            <div>
                <form action={`/plants/${plant._id}/edit`} method="GET">
                        <input type="submit" value="Edit" class="btn"/>
                    </form>
                    <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" class="btn"/>
                    </form>
            </div>
        )
        return (
            <Layout>
                <div>
                    <h1>{itemname}</h1>
                    <img src={img}/>
                    <p>{description}</p>
                    <h2>Available: {qty}</h2>
                    <div>
                        {this.props.username ? loggedIn : ''}
                    </div>
                    <form action={`/plants/${plant._id}/swap`} method="GET">
                        <input type="submit" value="Swap" class="btn"/>
                    </form>
                    <a href="/plants/" class="btn">Back To Plants</a>
                </div>
            </Layout>
        )
    }
}
module.exports = Show