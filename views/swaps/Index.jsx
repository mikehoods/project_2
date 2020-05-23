const React = require('react')
const Layout = require('../components/Layout.jsx')

class SwapIndex extends React.Component {
    render() {
        return (
            <Layout>
                <h1>All the Swaps</h1>
                <div>
                    {this.props.swaps.map((swap, i) => {
                        return (
                            <div key={i}>
                                <h2>{swap.owner}: {swap.title}</h2>
                                <h3>From: {swap.requestFrom}</h3>
                                <p>{swap.msg}</p>
                            </div>
                        )
                    })}    
                </div> 
            </Layout>
        )
    }
}

module.exports = SwapIndex