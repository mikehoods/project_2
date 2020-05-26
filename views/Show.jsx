const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Show extends Component {
    render() {
        const { itemname, qty, description, img } = this.props.plant
        const { plant } = this.props
        ////Show Swap option if qty > 0////
        const canSwap = (
            qty > 0 ? 
            <form action={`/plants/${plant._id}/swap`} method="GET">
                <input type="submit" value="Swap" class="btn"/>
            </form> : ''
        )
        ////Display options for plant owner////
        const ownsPlant = (
            <div class="show-btns">
                <form action={`/plants/${plant._id}/edit`} method="GET">
                    <input type="submit" value="Edit" class="btn"/>
                </form>
                <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" class="btn"/>
                </form>
                <a href="/plants/" class="btn">Back To Plants</a>
            </div>
        )
        ////Display options if plant not owned////
        const doesNotOwn = (
            <div class="show-btns">
                {canSwap}
                <a href="/plants/" class="btn">Back To Plants</a>
            </div>
        )
        ////Check if plant is in stock////
        const inStock = (
            qty > 0 ? qty : "Out of Stock"
            )
        return (
            <Layout>
                <div>
                    <h1>{itemname}</h1>
                    <img src={img}/>
                    <p>{description}</p>
                    <h2>Qty: {inStock}</h2>
                    <div>
                        {(this.props.username === plant.owner) ? ownsPlant : doesNotOwn}
                    </div>
                    
                </div>
            </Layout>
        )
    }
}
module.exports = Show