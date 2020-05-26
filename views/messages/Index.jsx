const React = require('react')
const Layout = require('../components/Layout.jsx')

class MessageIndex extends React.Component {
    render() {
        const allMessages = []
        {this.props.messages.map((message, i) => {
            return (
                allMessages.push(message)
            )
        })}
        ////Display filter to show messages sent to you////
        const yourMsgs = (yours, i) => {
            
            return allMessages[i].to === this.props.username
        }
        const msgsToYou = (allMessages.filter(yourMsgs))
        ////Display filter to show messages you've sent////
        const sentMsgs = (sent, i) => {
            
            return allMessages[i].from === this.props.username
        }
        const msgsFromYou = (allMessages.filter(sentMsgs))
        return(
            <Layout>
                <header id="msg-header">
                    <h1>{this.props.username}'s Messages</h1>
                </header>
                    <nav id="msg-nav">
                        <a href="/swaps" class="btn">My Swaps</a>
                        <a href="/plants" class="btn">Check Out Plants</a>
                        <form action="/sessions/?_method=delete" method="post">
                            <input type="submit" value="Logout" class="btn"/>
                        </form>
                    </nav>
                
                <div id="msg-container">
                    <h2>Inbox</h2>
                    <div>
                    {msgsToYou.map((message, i) => {
                            return (
                                <div key={i} class="msg">
                                    <h2>To: {message.to}</h2>
                                    <h2>From: {message.from}</h2>
                                    {/* Got syntax for formatting createdAt here: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/ */}
                                    <h2>Date: {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                        }).format(message.createdAt)}
                                    </h2>
                                    <h2>Title: {message.title}</h2>
                                    <p>{message.msg}</p>
                                    <div class="deleteDiv">
                                        <form action={`/messages/new`} method="GET">
                                            <input type="hidden" name="to" value={message.from}/>
                                            <input type="submit" value="Reply" class="btn"/>
                                        </form>
                                        <form action={`/messages/${message._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="Delete" class="btn"/>
                                        </form>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h2>Sent Messages</h2>
                    <div>
                    {msgsFromYou.map((message, i) => {
                            return (
                                <div key={i} class="msg">
                                    <h2>To: {message.to}</h2>
                                    <h2>From: {message.from}</h2>
                                    {/* Got syntax for formatting createdAt here: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/ */}
                                    <h2>Date: {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                        }).format(message.createdAt)}
                                    </h2>
                                    <h2>Title: {message.title}</h2>
                                    <p>{message.msg}</p>
                                    <div class="deleteDiv">
                                        <form action={`/messages/${message._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="Delete" class="btn"/>
                                        </form>
                                    </div>
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