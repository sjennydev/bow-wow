const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

class Index extends React.Component {
    render() {
        return (
            <AppLayout title="Index Page">
                <ul className="pet-list">
                    {this.props.pets.map(
                        (pet, index) => {
                            return (
                                <li className="pet-list__item ">
                                    <a href={`/petShop/${pet._id}`}> 
                                        <div className="container">                                 
                                            <div className="card" >
                                                <span className="img"><img src={`${pet.img}`} className="card-img-top"/></span> <br/>
                                                <div className="card-body">
                                                    <span className="breed">{pet.breed}</span> <br/>
                                                    <span className="sex">{pet.sex}</span> <br/>
                                                    <span className="color">{pet.color}</span> <br/>
                                                    <span className="age">{pet.age}</span> <br/>
                                                    <span className="tagNumber">{pet.tagNumber}</span> <br/>
                                                    <span className="birthDate">{pet.birthDate}</span> <br/>
                                                    <span className="arrivalDate">{pet.arrivalDate}</span> <br/>
                                                    <span className="availability">{pet.availability}</span> <br/>
                                                    <span className="price">{pet.price}</span> <br/>
                                                </div>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                                
                            )
                        }
                    )}
                </ul>
            {/* <a href="/petShop/new">New Pet</a> */}
            </AppLayout>
        )
    }
}
module.exports = Index;
