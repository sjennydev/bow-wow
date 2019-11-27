const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Index extends React.Component{
    render() {
        console.log(this.props);
        return (
            <AppLayout title="Bow-Wow">
                <div>
                    <ul className="d-flex justify-content-center list-unstyled p-1">
                    {this.props.pets.map(
                        (pet, index) => {
                            return(                               
                                <li><a href={`/petShop/${pet.id}`}><img className="img-fluid" src={`/assets/Pup0${index}.jpg`} alt="logo"/></a></li>
                            )
                        }
                    )}
                    </ul>
                </div>
            </AppLayout>
        )
    }
}

module.exports = Index;








