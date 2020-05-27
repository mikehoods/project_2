const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class MyPlants extends Component {
    render() {
        ////Check if plant is in stock////
        const inStock = (plant) => (
            plant.qty > 0 ? plant.qty : "Out of Stock"
            )
        ////Array of all plants////
        const allPlants = []
        {this.props.plants.map((swap, i) => {
            return (
                allPlants.push(swap)
            )
        })}
        ////Display filter for user's plants////
        const checkIfYours = (owner, i) => {
            if (allPlants[i].owner === this.props.username) {
                return allPlants[i]
            }
        }
        const yourPlants = (allPlants.filter(checkIfYours))
        return (
            <Layout>
                <header class="header">
                    <h1>{this.props.username}'s Plants</h1>
                    <a href="/plants/" class="btn">Find Plants</a>
                    <a href="/swaps" class="btn">My Swaps</a>
                    <a href="/messages" class="btn">Messages</a>
                    <a href="/plants/new" class="btn">Add A Plant</a>
                    <form action="/sessions/?_method=delete" method="post">
                        <input type="submit" value="Logout" class="btn"/>
                    </form>
                </header>
                <div class="plants-container">
                        <h3 class="plantType-h3">Your Plants</h3>
                        <div class="plants-row">
                    {yourPlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                                <p>{plant.description}</p>
                                <div class="show-btns">
                <form action={`/plants/${plant._id}/edit`} method="GET">
                    <input type="submit" value="Edit" class="btn"/>
                </form>
                <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" class="btn"/>
                </form>
            </div>
                            </div>
                        )
                    })}
                        </div>
                    </div>
            </Layout>
        )
    }
}
module.exports = MyPlants