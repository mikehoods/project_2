const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render() {
        ////Display nav options for logged in user////
        const loggedIn = (
            <div class="navDiv">
                <h2>Hey there {this.props.username}</h2>
                <a href="/swaps" class="btn">My Swaps</a>
                <a href="/messages" class="btn">Messages</a>
                <a href="/plants/new" class="btn">Add A Plant</a>
                <form action="/sessions/?_method=delete" method="post">
                    <input type="submit" value="Logout" class="btn"/>
                </form>
            </div>
        )
        ////Display nav options if not logged in////
        const loggedOut = (
            <div class="navDiv navLogin">
                <a href="/sessions/new" class="btn">Login</a>
                <a href="/users/new" class="btn">Sign Up</a>
            </div>
        )
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
        ////Reverse array to show newest plants first////
        allPlants.reverse()
        ////Display filter for produce type plants////
        const checkIfProduce = (owner, i) => {
            if (allPlants[i].plantType === "produce") {
                return allPlants[i]
            }
        }
        const producePlants = (allPlants.filter(checkIfProduce))
        ////Display filter for cutting type plants////
        const checkIfCutting = (owner, i) => {
            if (allPlants[i].plantType === "cutting") {
                return allPlants[i]
            }
        }
        const cuttingPlants = (allPlants.filter(checkIfCutting))
        //Display filter for seed type plants////
        const checkIfSeed = (owner, i) => {
            if (allPlants[i].plantType === "seed") {
                return allPlants[i]
            }
        }
        const seedPlants = (allPlants.filter(checkIfSeed))
        ////Display filter for starts type plants////
        const checkIfStart = (owner, i) => {
            if (allPlants[i].plantType === "start") {
                return allPlants[i]
            }
        }
        const startPlants = (allPlants.filter(checkIfStart))
        ////Display filter for other type plants////
        const checkIfOther = (owner, i) => {
            if (allPlants[i].plantType === "other") {
                return allPlants[i]
            }
        }
        const otherPlants = (allPlants.filter(checkIfOther))
        return(
            <Layout>
                <div>
                    <header>
                    <h1 id="indexH1">Victory</h1>
                    <h2>virtual plant swap</h2>
                    </header>
                    <nav>
                        {this.props.username ? loggedIn : loggedOut}
                    </nav>
                    <div class="plants-container">
                        <h3 class="plantType-h3">Swap Cuttings</h3>
                        <div class="plants-row">
                    {cuttingPlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                            </div>
                        )
                    })}
                        </div>
                    </div>
                    <div class="plants-container">
                        <h3 class="plantType-h3">Swap Starts</h3>
                        <div class="plants-row">
                    {startPlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                            </div>
                        )
                    })}    
                        </div>
                    </div>
                    <div class="plants-container">
                        <h3 class="plantType-h3">Swap Seeds</h3>
                        <div class="plants-row">
                    {seedPlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                            </div>
                        )
                    })}    
                        </div>
                    </div>
                    <div class="plants-container">
                        <h3 class="plantType-h3">Swap Produce</h3>
                        <div class="plants-row">
                    {producePlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                            </div>
                        )
                    })}
                        </div>   
                    </div>
                    <div class="plants-container">
                        <h3 class="plantType-h3">Swap Other Stuff</h3>
                        <div class="plants-row">
                    {otherPlants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img || "/images/nophoto.jpg"} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Qty: {inStock(plant)}</h2>
                            </div>
                        )
                    })}   
                        </div> 
                    </div>    
                </div>
            </Layout>
        )
    }
}
module.exports = Index