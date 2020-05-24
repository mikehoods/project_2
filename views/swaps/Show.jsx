const React = require('react')
const Layout = require('../components/Layout.jsx')

class ShowSwap extends React.Component {
    render() {
        const {title, msg, requestFrom, qtyRequested} = this.props.swap
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
                {swapChoices.map((swap, i) => {
                        return (
                            <div key={i}>
                                <h2>{swap.itemname}</h2>
                                <a href={`/plants/${swap._id}`}><img src={swap.img} alt={swap.itemname}/></a>
                                <h2>Available:{swap.qty}</h2>
                                <form>
                                    <input type="submit" value="Gimme!" class="btn"/>
                                </form>
                            </div>
                        )
                    })}
            </div>
        )
        console.log(thePlants)
        console.log(swapChoices)
        return (
            <Layout>
                <h1>Wanna Swap?</h1>
                <div>
                <h2>{title}</h2>
                <h3>Hey {this.props.owner}:</h3>
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