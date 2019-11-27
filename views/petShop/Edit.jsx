const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx');

class Edit extends React.Component{
    render() {
        return (
            <AppLayout title="Edit Page">
            <form action={`/petShop/${this.props._id}?_method=put`} method="post">
                <p>
                    <label>Breed:</label>
                    <input type="text" value={this.props.breed} name="breed"/>
                </p>
                <p>
                    <label>Sex:</label>
                    <input type="text" value={this.props.sex} name="sex"/>
                </p>
                <p>
                    <label>Color:</label>
                    <input type="text" value={this.props.color} name="color"/>
                </p>
                <p>
                    <label>Age:</label>
                    <input type="number" value={this.props.age} name="age"/>
                </p>
                <p>
                    <label>TagNumber:</label>
                    <input type="text" value={this.props.tagNumber} name="tagNumber"/>
                </p>
                <p>
                    <label>BirthDate:</label>
                    <input type="text" value={this.props.birthDate} name="birthDate"/>
                </p>
                <p>
                    <label>ArrivalDate:</label>
                    <input type="text" value={this.props.arrivalDate} name="arrivalDate"/>
                </p>
                <p>
                    <label>Availability:</label>
                    <input type="text" value={this.props.availability} name="availability"/>
                </p>
                <p>
                    <label>Price: $</label>
                    <input type="number" value={this.props.price} name="price"/>
                </p>
                <p>
                <div className="card-link">
                    <input type="submit" value="Submit"/>
                </div>
                </p>
            </form>
            </AppLayout>
        )
    }
}
module.exports= Edit;