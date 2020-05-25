const React = require('react')
const Layout = require('../components/Layout.jsx')

class MessageIndex extends React.Component {
    render() {
        return(
            <Layout>
                <header>
                    <h1>Messages</h1>
                </header>
            </Layout>
        )
    }
}
module.exports = MessageIndex