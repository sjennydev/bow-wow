const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

class New extends React.Component{
    render() {
        return (
            <AppLayout title="New Page">
            <form action={`/petShop`} method="post">
                <p>
                    <label>Breed:</label>
                    <input type="text" name="breed"/>
                </p>
                <p>
                    <label>Sex:</label>
                    <input type="text" name="sex"/>
                </p>
                <p>
                    <label>Color:</label>
                    <input type="text" name="color"/>
                </p>
                <p>
                    <label>Age:</label>
                    <input type="number" name="age"/>
                </p>
                <p>
                    <label>TagNumber:</label>
                    <input type="text" name="tagNumber"/>
                </p>
                <p>
                    <label>BirthDate:</label>
                    <input type="text" name="birthDate"/>
                </p>
                <p>
                    <label>ArrivalDate:</label>
                    <input type="text" name="arrivalDate"/>
                </p>
                <p>
                    <label>Availability:</label>
                    <input type="text" name="availability"/>
                </p>
                <p>
                    <label>Price: $</label>
                    <input type="number" name="price"/>
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
module.exports = New;