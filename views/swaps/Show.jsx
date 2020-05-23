const React = require('react')
const Layout = require('../components/Layout.jsx')

class ShowSwap extends React.Component {
    render() {
        const {title, owner, msg, requestFrom, qtyRequested} = this.props.swap
        const swap = this.props
        return (
            <Layout>
                <h1>Wanna Swap?</h1>
                <h2>{title}</h2>
                <h3>Hey {owner}:</h3>
                <p>{msg} - {requestFrom}</p>
                <a href="/swaps" class="btn">Back To Swaps</a>
            </Layout>
        )
    }
}

module.exports = ShowSwap