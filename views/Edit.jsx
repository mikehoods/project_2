const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class Edit extends Component {
    render() {
        const { itemname, description, qty, plantType, img} = this.props.plant
        const { plant } = this.props
        return(
            <Layout>
                <div>
                    <h1>Edit Item</h1>
                    <form action={`/plants/${plant._id}/edit?_method=put`}method="POST">
                Item Name:<input type="text" name="itemname" value={itemname} autoFocus/>
                Description:<input type="textarea" name="description" value={description}/>
                Quantity:<input type="number" name="qty" value={qty}/>
                Image:<input type="text" name="img" value={img}/>
                Plant Type:<select id="plantType" name="plantType" select={plantType}>
                    <option value={plantType} selected>{plantType}</option>
                    <option value="cutting">cutting</option>
                    <option value="start">start</option>
                    <option value="produce">produce</option>
                    <option value="seed">seed</option>
                    <option value="other">other</option>
                </select><br/>
                <input type="submit" value="Edit Item" class="btn"/>
                <a href={`/plants/${plant._id}`} class="btn">Or Don't</a>
            </form>
                </div>
            </Layout>
        )
    }
}
module.exports = Edit