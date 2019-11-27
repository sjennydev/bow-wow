const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

class Show extends React.Component{
    render() {
        return (
            <AppLayout title="Show Page">
                <div className="container">  
                    <div className="card" style={{width: '70rem'}}>
                        <p><img src={`${this.props.img}`} className="card-img-top"/> </p>
                            <div className="card-body">
                                <h5 className="card-title">Hi! I am {this.props.breed}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Sex: {this.props.sex}</li>
                                <li className="list-group-item">Color: {this.props.color}</li>
                                <li className="list-group-item">Age: {this.props.age}</li>
                                <li className="list-group-item">Tag Number: {this.props.tagNumber}</li>
                                <li className="list-group-item">Birth date: {this.props.birthDate}</li>
                                <li className="list-group-item">Arrival date: {this.props.arrivalDate}</li>
                                <li className="list-group-item">Availability: {this.props.availability}</li>
                                <li className="list-group-item">Price: ${this.props.price}</li>
                            </ul>               
                            <div className="card-body">
                                <a href={`/petShop/${this.props._id}/edit`} className="card-link" className="btn btn-primary">Edit</a>
                                <div className="card-link">
                                <form action={`/petShop/${this.props._id}?_method=delete`} method="post">
                                    <input type="submit" value="Delete" />
                                </form>
                                </div>
                            </div>
                    </div>
                </div> 
            </AppLayout>
        )
    }
}
module.exports = Show;