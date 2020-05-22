const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class New extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>Add New Item</h1>
                    <form action="/logs" method="POST">
                Item Name:<input type="text" name="itemName"/>
                Description:<input type="textarea" name="description"/>
                Quantity:<input type="number" name="qty"/>
                Image:<input type="url" name="img"/>
                Plant Type:
                <input type="radio" id="plantCutting" name="plantType" value="cutting"/>
                <label for="cutting">Cutting</label><br/>
                <input type="radio" id="plantStart" name="plantType" value="start"/>
                <label for="start">Start</label><br/>
                <input type="radio" id="plantSeed" name="plantType" value="seed"/>
                <label for="seed">Seed</label>
                <input type="submit" value="Add Item" class="btn"/>
            </form>
                </div>
            </Layout>
        )
    }
}
module.exports = New