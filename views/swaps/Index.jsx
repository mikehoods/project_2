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

        console.log(allSwaps)
        console.log(requestedSwaps)
        return (
            <Layout>
                <h1>{this.props.username}'s Swaps</h1>
                <div>
                    {/* {this.props.swaps.map((swap, i) => {
                        return (
                            <div key={i}>
                                <h2>{swap.owner}: {swap.title}</h2>
                                <h3>From: {swap.requestFrom}</h3>
                                <p>{swap.msg}</p>
                            </div>
                        )
                    })}     */}
                    <h1>Your Requests</h1>
                    {requestedSwaps.map((swap, i) => {
                        return (
                            <div key={i}>
                                <h2>{swap.title} - sent to {swap.owner}</h2>
                                {/* <h3>From: {swap.requestFrom}</h3> */}
                                <p>{swap.msg}</p>
                            </div>
                        )
                    })}
                    <h1>Their Requests</h1>
                    {ownedSwaps.map((swap, i) => {
                        return (
                            <div key={i}>
                                <h2>{swap.title}</h2>
                                <h3>From: {swap.requestFrom}</h3>
                                <p>{swap.msg}</p>
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