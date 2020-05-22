const React = require('react')

const Layout = (props => {
    return (
        <>
            <head>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link href="/css/style.css" rel="stylesheet"/>
            </head>
            <body>
                {props.children}
            </body>
        </>
    )
})
module.exports = Layout