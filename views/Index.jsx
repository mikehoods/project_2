const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>Victory</h1>
                    <h2>virtual plant swap</h2>
                </div>
            </Layout>
        )
    }
}
module.exports = Index