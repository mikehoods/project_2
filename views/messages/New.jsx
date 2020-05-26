const React = require('react')
const Layout = require('../components/Layout.jsx')

class NewMessage extends React.Component {
    render() {
        return(
            <Layout>
                <header>
                    <h1>Send a Message</h1>
                </header>
                <div id="msg-container">
                    <div class="msg">
                    <form action="/messages/" method="post">
                        To: <input type="text" name="to" autoFocus/><br/>
                        Title: <input type="text" name="title" value="no subject"/><br/>
                        Message: <input type="textarea" name="msg"/><br/>
                        <input type="hidden" name="from" value={this.props.username}/>
                        <div class="newMessage-btnDiv">
                            <input type="submit" value="Send Message" class="btn"/>
                            <a href="/swaps" class="btn">Cancel</a>
                        </div>
                    </form>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = NewMessage