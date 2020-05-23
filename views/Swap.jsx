const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Swap extends Component {
    render() {
        const { itemname, description, qty, plantType, img} = this.props.plant
        const { plant } = this.props
        return(
            <Layout>
                <div>
                    <h1>Swap Plant</h1>
                <h2>{itemname}</h2>
                <h3>Type: {plantType}</h3>
                <img src={img}/>
                <p>{description}</p>
                </div>
            </Layout>
        )
    }
}
module.exports = Swap