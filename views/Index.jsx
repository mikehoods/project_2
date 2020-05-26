const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render() {
        const logout = (
            <div class="navDiv">
                <h2>Hey there {this.props.username}</h2>
                <a href="/swaps" class="btn">My Swaps</a>
                <a href="/messages" class="btn">Messages</a>
                <a href="/plants/new" class="btn">Add A Plant</a>
                <form action="/sessions/?_method=delete" method="post">
                    <input type="submit" value="Logout" class="btn"/>
                </form>
            </div>
        )
        const login = (
            <div class="navDiv navLogin">
                <a href="/sessions/new" class="btn">Login</a>
                <a href="/users/new" class="btn">Sign Up</a>
            </div>
        )
        return(
            <Layout>
                <div>
                    <header>
                    <h1 id="indexH1">Victory</h1>
                    <h2>virtual plant swap</h2>
                    </header>
                    <nav>
                        {this.props.username ? logout : login}
                    </nav>
                <div class="plants-container">
                    {this.props.plants.map((plant, i) => {
                        return (
                            <div key={i} class="plants-card">
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img} alt={plant.itemname}/></a>
                                <h2>Type: {plant.plantType} | Available: {plant.qty}</h2>
                            </div>
                        )
                    })}    
                </div>         
                </div>
            </Layout>
        )
    }
}
module.exports = Index