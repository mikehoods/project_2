const React = require('react')
const {Component} = React
const Layout = require('./components/Layout.jsx')

class New extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>Add New Item</h1>
                    <form action="/plants" method="POST" class="form-group">
                Item Name:<input type="text" name="itemname" class="form-control" autoFocus/>
                <input type="hidden" name="owner" value={this.props.username}/>
                Description:<input type="textarea" name="description"class="form-control"/>
                Quantity:<input type="number" name="qty" class="form-control"/>
                Image:<input type="url" name="img" class="form-control"/>
                Plant Type:<select id="plantType" name="plantType">
                    <option value="cutting">cutting</option>
                    <option value="start">start</option>
                    <option value="produce">produce</option>
                    <option value="seed">seed</option>
                    <option value="other">other</option>
                </select><br/>
                <input type="submit" value="Add Item" class="btn"/>
                <a href="/plants/myplants" class="btn">Nevermind</a>
            </form>
                </div>
            </Layout>
        )
    }
}
module.exports = New