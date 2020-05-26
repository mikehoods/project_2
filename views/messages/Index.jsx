const React = require('react')
const Layout = require('../components/Layout.jsx')

class MessageIndex extends React.Component {
    render() {
        return(
            <Layout>
                <header>
                    <h1>{this.props.username}'s Messages</h1>
                </header>
                <div id="msg-container">
                    <div class="msg">
                        {this.props.messages.map((message, i) => {
                            return (
                                <div key={i}>
                                    <h2>To:</h2>
                                    <h2>From: {message.from}</h2>
                                    <h2>Title:</h2>
                                    <p>{message.msg}</p>
                                    <form action={`/messages/${message._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" class="btn"/>
                                    </form>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = MessageIndex