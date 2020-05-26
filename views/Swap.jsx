const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Swap extends Component {
    render() {
        const { itemname, description, qty, plantType, owner, img} = this.props.plant
        const { plant } = this.props
        return(
            <Layout>
                <div>
                    <h1>Swap Plant</h1>
                    <h2>{itemname}</h2>
                    <h3>Type: {plantType} | Available {qty}</h3>
                    <img src={img}/>
                    <p>{description}</p>
                    <form action="/swaps/" method="post">
                        Message To Owner: <input type="textarea" name="msg"/><br/>
                        Requested Quantity: <input type="number" name="qty1"/><br/>
                        <input type="hidden" name="requestFrom" value={this.props.username}/>
                        <input type="hidden" name="itemName1" value={itemname}/>
                        <input type="hidden" name="itemName2" value=""/>
                        <input type="hidden" name="img1" value={img}/>
                        <input type="hidden" name="img2" value="/images/waiting.jpg"/>
                        <input type="hidden" name="owner" value={owner}/>
                        <input type="hidden" name="plant1" value={plant._id}/>
                        <input type="hidden" name="plant2" value=''/>
                        <input type="hidden" name="initiated" value="false"/>
                        <input type="hidden" name="approved" value="false"/>
                        <input type="submit" value=" Request Swap" class="btn"/>
                        <a href="/plants" class="btn">Back to Plants</a>
                    </form>
                </div>
            </Layout>
        )
    }
}
module.exports = Swap