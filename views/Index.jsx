const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render() {
        const logout = (
            <div class="navDiv">
            <h2>Hey there {this.props.username}</h2>
            <a href="/plants/new" class="btn">Add A Plant</a>
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" class="btn"/>
            </form>
            </div>
        )
        const login = (
            <a href="/sessions/new" class="btn">Login</a>
        )
        return(
            <Layout>
                <div>
                    <h1>Victory</h1>
                    <h2>virtual plant swap</h2>
                    <nav>
                        {this.props.username ? logout : login}
                    </nav>
                <div>
                    {this.props.plants.map((plant, i) => {
                        return (
                            <div key={i}>
                                <h2>{plant.itemname}</h2>
                                <a href={`/plants/${plant._id}`}><img src={plant.img} alt={plant.itemname}/></a>
                                <h2>Available:{plant.qty}</h2>
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