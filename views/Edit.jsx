const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Edit extends Component {
    render() {
        const { itemName, description, qty, plantType, img} = this.props.plant
        const { plant } = this.props
        return(
            <Layout>
                <div>
                    <h1>Edit Item</h1>
                    <form action={`/plants/${plant._id}/edit?_method=put`}method="POST">
                Item Name:<input type="text" name="itemName" value={itemName}/>
                Description:<input type="textarea" name="description" value={description}/>
                Quantity:<input type="number" name="qty" value={qty}/>
                Image:<input type="url" name="img" value={img}/>
                Plant Type:
                <input type="radio" id="plantCutting" name="plantType" value="cutting"/>
                <label for="cutting">Cutting</label><br/>
                <input type="radio" id="plantStart" name="plantType" value="start"/>
                <label for="start">Start</label><br/>
                <input type="radio" id="plantSeed" name="plantType" value="seed"/>
                <label for="seed">Seed</label>
                <input type="radio" id="plantProduce" name="plantType" value="produce"/>
                <label for="seed">Produce</label>
                <input type="radio" id="plantOther" name="plantType" value="seed"/>
                <label for="other">Other</label>
                <input type="submit" value="Edit Item" class="btn"/>
            </form>
                </div>
            </Layout>
        )
    }
}
module.exports = Edit