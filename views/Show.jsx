const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Show extends Component {
    render() {
        const {itemName, qty, description, img} = this.props.plant
        return (
            <Layout>
                <div>
                    <h1>{itemName}</h1>
                    <img src={img}/>
                    <p>{description}</p>
                    <h2>Available: {qty}</h2>
                    <a href="/plants/" class="btn">Back To Plants</a>
                </div>
            </Layout>
        )
    }
}
module.exports = Show