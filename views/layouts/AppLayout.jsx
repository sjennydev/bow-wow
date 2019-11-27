const React = require('react');

class AppLayout extends React.Component{
    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css"/>
                    <link rel="stylesheet" href="/css/material-kit.css" type="text/css"/>
                    <link rel="stylesheet" href="/css/style.css" type="text/css"/>
                </head>
                <body>
                    <header>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4 text-uppercase font-weight-bold">Bow-Wow</h1>
                                <p>Little puppies for big hearts <span className="heart">&hearts;</span></p>
                                {/* <hr className="my-4"></hr> */}
                                <nav className="navbar nav-justified">
                                    <a href="/" className="btn btn-outline-success" type="button">Home</a>
                                    <a href="/petShop/new"className="btn btn-outline-success" type="button">New Pet</a>
                                    <a href="/petShop/stores" className="btn btn-outline-success" type="button">Our Stores</a>
                                    <a href="/petShop" className="btn btn-outline-success" type="button">Pets</a>                       
                                </nav>
                            </div>
                        </div>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = AppLayout;