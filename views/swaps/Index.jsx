const React = require('react')
const Layout = require('../components/Layout.jsx')

class SwapIndex extends React.Component {
    render() {
        ////Array of all swaps////
        const allSwaps = []
        {this.props.swaps.map((swap, i) => {
            return (
                allSwaps.push(swap)
            )
        })}
        ////Reverse array to show newest swaps first////
        allSwaps.reverse()
        ////Display filter for your approved swaps////
        const checkIfApproved = (owner, i) => {
            if (allSwaps[i].approved !== false) {
                return allSwaps[i].requestFrom || allSwaps[i].owner === this.props.username
            }
        }
        const approvedSwaps = (allSwaps.filter(checkIfApproved))
        ////Display filter for unapproved swaps you started////
        const youRequested = (owner, i) => {
            if (allSwaps[i].approved === false) {
                return allSwaps[i].requestFrom === this.props.username
            }
        }
        const requestedSwaps = (allSwaps.filter(youRequested))
        ////Display filter for unapproved swaps others started////
        const theyRequested = (owner, i) => {
            if (allSwaps[i].approved === false) {
                return allSwaps[i].owner === this.props.username
            }
        }
        const ownedSwaps = (allSwaps.filter(theyRequested))
        ////Approve Swap form////
        const isInitiated = (swap) => (
            <form action={`/swaps/${swap._id}?_method=put`}method="POST">
                <input type="hidden" name="approved" value="true"/>
                <input type="submit" value="Approve Swap" class="btn"/>
            </form>
        )
        ////Link to swap partner's plants if no choice made////
        const chooseSwap = (swap) => (
            <a href={`/swaps/${swap._id}`}><img src={swap.img2}/></a>
        )
        ////Display second swap item once chosen////
        const swapChosen = (swap) => (
            <img src={swap.img2}/>
        )
        return (
            <Layout>
                <header>
                    <h1>{this.props.username}'s Swaps</h1>
                    <a href="/messages" class="btn">Messages</a>
                    <a href="/plants" class="btn">Check Out Plants</a>
                </header>
                <div>
                    <div id="approved-container">
                        <div id="approvedSwaps">
                            <h1>Approved Swaps</h1>
                        </div>
                        {approvedSwaps.map((swap, i) => {
                            return (
                                <div key={i} class="approvedSwap-div">
                                    <h3>
                                        {/* Got syntax for formatting createdAt here: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/ */}
                                        {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                        }).format(swap.createdAt)}
                                    </h3>
                                    <h3>{swap.itemName1} for {swap.itemName2}</h3>
                                    <div class="request-btnDiv">
                                        <a href="/messages/new" class="btn approvedSwaps-btn">Arrange Your Swap</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div id="yourRequests">
                        <h1>Your Requests</h1>
                    </div>
                    {requestedSwaps.map((swap, i) => {
                        return (
                            <div key={i} class="swap-container">
                                <div class="yourSwap-header">
                                <h3>To: {swap.owner}</h3>
                                <h3>
                                    {/* Got syntax for formatting createdAt here: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/ */}
                                    {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                    }).format(swap.createdAt)}
                                </h3>
                                <div class="request-btnDiv yours-btnDiv">
                                    <a href="/messages/new" class="btn">Message {swap.owner}</a>
                                    {swap.initiated ? isInitiated(swap) : ''}
                                </div>
                                </div>
                                <div class="swapImg-row">
                                    <div>
                                        <h3>You Want</h3>
                                        <img src={swap.img1 || "/images/nophoto.jpg"}/><br/>
                                        {swap.itemName1}<br/>
                                        Qty: {swap.qty1}
                                    </div>
                                    <div>
                                    <ion-icon name="swap-horizontal-sharp"></ion-icon>
                                    </div>
                                    <div>
                                        <h3>They Want</h3>
                                        <img src={swap.img2}/><br/>
                                        {swap.itemName2}<br/>
                                        Qty: {swap.qty2 || "?"}
                                    </div>
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
                                <div class="theirSwap-header">
                                    <h3>From: {swap.requestFrom}</h3>
                                    <h3>
                                        {/* Got syntax for formatting createdAt here: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/ */}
                                        {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                        }).format(swap.createdAt)}
                                    </h3>
                                    <div class="request-btnDiv theirs-btnDiv">
                                        <a href="/messages/new" class="btn">Message {swap.requestFrom}</a>
                                    </div>  
                                </div>
                                <div class="swapImg-row">
                                    <div>
                                        <h3>They Want</h3>
                                        <img src={swap.img1 || "/images/nophoto.jpg"}/><br/>
                                        {swap.itemName1}<br/>
                                        Qty: {swap.qty1}
                                    </div>
                                    <div>
                                        <ion-icon name="swap-horizontal-sharp"></ion-icon>
                                    </div>
                                    <div>
                                        <h3>You Want</h3>
                                        {swap.initiated ? swapChosen(swap) : chooseSwap(swap)}<br/>
                                        {swap.itemName2}<br/>
                                        Qty: {swap.qty2 || "?"}
                                    </div>
                                </div>                               
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}
module.exports = SwapIndex