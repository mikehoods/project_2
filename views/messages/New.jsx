const React = require('react')
const Layout = require('../components/Layout.jsx')

class ShowMessage extends React.Component {
    render() {
        return(
            <Layout>
                <header>
                    <h1>{this.props.username}'s Messages</h1>
                </header>
                <div id="msg-container">
                    <div class="msg">
                    <form action="/messages/" method="post">
                    To:<br/>
                    Message: <input type="textarea" name="msg"/><br/>
                    <input type="hidden" name="from" value={this.props.username}/>
                    <input type="submit" value="Send Message" class="btn"/>
                    <a href="/swaps" class="btn">Cancel</a>
                    </form>
                    </div>
                </div>
                
            </Layout>
        )
    }
}
module.exports = ShowMessage