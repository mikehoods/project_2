const React = require('react')
const Layout = require('../components/Layout.jsx')

class ShowSwap extends React.Component {
    render() {
        const {title, msg, owner, requestFrom, _id, itemName1} = this.props.swap
        // const swap = this.props
        const thePlants = []
        {this.props.plants.map((plants, i) => {
            if(plants.qty > 0) {
            return (
                thePlants.push(plants)
            )
            }
        })}
        ////Display filter to show swapper plants available from swap partner////
        const youWant = (owner, i) => {
            
            return thePlants[i].owner === this.props.swap.requestFrom
        }
        const swapChoices = (thePlants.filter(youWant))
        return (
            <Layout>
                <h1>Wanna swap your {itemName1}?</h1>
                <a href="/swaps" class="btn">Back To Swaps</a>
                <div class="showSwap-greeting">
                <h2>{title}</h2>
                <h3>Hey {owner}:</h3>
                <p>{msg} - {requestFrom}</p>
                </div>
                <div>
                <h2 class="showSwap-requestFrom-h2">{requestFrom}'s Plants</h2>
                {swapChoices.map((plant2, i) => {
                        return (
                            <div key={i}>
                                <h2>{plant2.itemname}</h2>
                                <a href={`/plants/${plant2._id}`}><img src={plant2.img} alt={plant2.itemname}/></a>
                                <h2>Available: {plant2.qty}</h2>
                                <form action={`/swaps/${_id}?_method=put`}method="POST">
                                    {/* ////Pass hidden values for finishing swap and swap display */}
                                    <input type="hidden" name="plant2" value={plant2._id}/>
                                    <input type="hidden" name="itemName2" value={plant2.itemname}/>
                                    <input type="hidden" name="img2" value={plant2.img}/>
                                    <input type="hidden" name="initiated" value="true"/>
                                    How Many? <input type="number" name="qty2" min="1" max={plant2.qty}/>
                                    <input type="submit" value="Gimme!" class="btn"/>
                                </form>
                            </div>
                        )
                    })}
            </div>
            </Layout>
        )
    }
}
module.exports = ShowSwap