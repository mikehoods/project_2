const React = require('react')
const Layout = require('../components/Layout.jsx')

class ShowSwap extends React.Component {
    render() {
        const {title, msg, owner, requestFrom, qtyRequested} = this.props.swap
        const swap = this.props
        const thePlants = []
        {this.props.plants.map((plants, i) => {
            return (
                thePlants.push(plants)
            )
        })}
        const youWant = (owner, i) => {
            
            return thePlants[i].owner === this.props.swap.requestFrom
        }
        const swapChoices = (thePlants.filter(youWant))
        const theirRequest = (
            <div>
                <h2>{requestFrom}'s Plants</h2>
                {swapChoices.map((plant2, i) => {
                        return (
                            <div key={i}>
                                <h2>{plant2.itemname}</h2>
                                <a href={`/plants/${plant2._id}`}><img src={plant2.img} alt={plant2.itemname}/></a>
                                <h2>Available:{plant2.qty}</h2>
                                <form action={`/swaps/${this.props.swap._id}?_method=put`}method="POST">
                                    <input type="hidden" name="plant2" value={plant2._id}/>
                                    <input type="hidden" name="initiated" value="true"/>
                                    <input type="submit" value="Gimme!" class="btn"/>
                                </form>
                            </div>
                        )
                    })}
            </div>
        )
        // console.log(thePlants)
        // console.log(swapChoices)
        return (
            <Layout>
                <h1>Wanna Swap?</h1>
                <div>
                <h2>{title}</h2>
                <h3>Hey {owner}:</h3>
                <p>{msg} - {requestFrom}</p>
                </div>
                <div>
                    {(this.props.username === this.props.swap.requestFrom) ? '' : theirRequest}
                </div>
                <a href="/swaps" class="btn">Back To Swaps</a>
            </Layout>
        )
    }
}

module.exports = ShowSwap