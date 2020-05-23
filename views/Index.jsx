const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logtout" class="btn"/>
            </form>
        )
        return(
            <Layout>
                <div>
                    <h1>Victory</h1>
                    <h2>virtual plant swap</h2>
                    <nav>
                        <h2>Hey there {this.props.username}</h2>
                        <a href="/plants/new" class="btn">Add A Plant</a>
                        {this.props.username ? logout : ''}
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