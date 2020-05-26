const React = require('react')
const Layout = require('../components/Layout.jsx')

class SwapIndex extends React.Component {
    render() {
        const allSwaps = []
        {this.props.swaps.map((swap, i) => {
            return (
                allSwaps.push(swap)
            )
        })}
        const youRequested = (owner, i) => {
            
            return allSwaps[i].requestFrom === this.props.username
        }
        const theyRequested = (owner, i) => {
            
            return allSwaps[i].owner === this.props.username
        }
        const requestedSwaps = (allSwaps.filter(youRequested))
        const ownedSwaps = (allSwaps.filter(theyRequested))
        const isInitiated = (swap) => (
            <form action={`/swaps/${swap._id}?_method=put`}method="POST">
                <input type="hidden" name="approved" value="true"/>
                <input type="submit" value="Approve Swap" class="btn"/>
            </form>
        )
        // console.log(allSwaps)
        console.log(requestedSwaps)
        // console.log(ownedSwaps)
        return (
            <Layout>
                <header><h1>{this.props.username}'s Swaps</h1>
                </header>
                <div>
                    <div id="yourRequests">
                        <h1>Your Requests</h1>
                    </div>
                    {requestedSwaps.map((swap, i) => {
                        return (
                            <div key={i} class="swap-container">
                                <h2><a href={`/swaps/${swap._id}`}>Request for {swap.itemName1} - sent to {swap.owner}</a></h2>
                                <h3>
                                    {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                    }).format(swap.createdAt)}
                                </h3>
                                <div class="swapImg-row">
                                    <div>
                                        <img src={swap.img1}/><br/>
                                        {swap.itemName1}<br/>
                                        Qty: {swap.qty1}
                                    </div>
                                    <div>
                                    <ion-icon name="swap-horizontal-sharp"></ion-icon>
                                    </div>
                                    <div>
                                        <img src={swap.img2}/><br/>
                                        {swap.itemName2}<br/>
                                        Qty: {swap.qty2}
                                    </div>
                                </div>
                                <div class="request-btnDiv">
                                <a href="/messages/new" class="btn">Message Owner</a>
                                {swap.initiated ? isInitiated(swap) : ''}
                                </div>
                            </div>
                        )
                    })}
                    <div id="theirRequests">
                        <h1>Their Requests</h1>
                    </div>
                    {ownedSwaps.map((swap, i) => {
                        return (
                            <div key={i} class="swap-container">
                                <h2><a href={`/swaps/${swap._id}`}>{swap.itemName1}</a></h2>
                                <h3>From: {swap.requestFrom}</h3>
                                <h3>
                                    {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                    }).format(swap.createdAt)}
                                </h3>
                                <div class="swapImg-row">
                                    <div>
                                        <h3>They Want</h3>
                                        <img src={swap.img1}/><br/>
                                        {swap.itemName1}<br/>
                                        Qty: {swap.qty1}
                                    </div>
                                    <div>
                                    <ion-icon name="swap-horizontal-sharp"></ion-icon>
                                    </div>
                                    <div>
                                        <h3>You Want</h3>
                                        <img src={swap.img2}/><br/>
                                        {swap.itemName2}<br/>
                                        Qty: {swap.qty2}
                                    </div>
                                </div>
                                <div class="request-btnDiv">
                                <a href="/messages/new" class="btn">Message Owner</a>
                                </div>                                
                            </div>
                        )
                    })}
                </div>
                <a href="/plants" class="btn">Back To Plants</a>
            </Layout>
        )
    }
}

module.exports = SwapIndex