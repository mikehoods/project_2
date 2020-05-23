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
                <h3>Type: {plantType} | Available {qty}</h3>
                <img src={img}/>
                <p>{description}</p>
                
            <form action="/users/:id/swaps" method="post">
                Message Owner: <input type="textarea" name="swapMessage"/><br/>
                Requested Quantity: <input type="number" name="swapQty"/><br/>
                <input type="submit" value=" Request Swap" class="btn"/>
                <a href="/plants" class="btn">Back to Plants</a>
            </form>
                </div>
            </Layout>
        )
    }
}
module.exports = Swap