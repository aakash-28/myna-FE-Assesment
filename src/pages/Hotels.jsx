import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/HotelStyle.css'
import User from '../images/user.jpg'
import data from '../data/data.json'
import RestaurantCard from '../components/RestaurantCard'


class Hotels extends React.Component {
    constructor(){
        super();
        this.state={
            list: data
        };
    }

    

    sortMenu=(e)=>{
        if (e.target.value === 'rating'){
            this.setState({
                list: data.sort(function(a,b){return b.rating - a.rating})
            })
            
        }
        else if (e.target.value === 'review'){
            this.setState({
                list: data.sort(function(a,b){return b.reviews - a.reviews})
            })
            
        }
        else if (e.target.value === 'name'){
            function compareName  (a, b)  {
                // case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();
              
                return (a < b) ? -1 : (a > b) ? 1 : 0;
              }
            this.setState({
                list: data.sort(function(a,b){return compareName(a.name, b.name)})
            })
            
        }
        
    }

    render(){
        return(
        <div>
            <div className="nav">
                <div id="logo">
                    <h2>Theobroma</h2>
                </div>

                <div id="user">
                    <div className="name">Hello, User</div>
                    <div className="profile">
                        <img src={User} alt="profile" id="img" height="45" width="45"/>
                    </div>
                </div>
            </div>
             
            <div className="maincart" class="container">

            <div id="menubar" class="row">
                <div class="col-sm-6">    
                    <h2 id="menu-title">Choose Your Favourite Outlet</h2>
                </div>
                <div class="col-md-6">
                    <p id ="sort">  Sort by &nbsp; &nbsp;
                        <select id="sort-metrics" defaultValue={"none"} onChange={(e) => this.sortMenu(e)}>
                            <option value="none" disabled hidden>None</option>
                            <option class="sort-option" value="name">Name</option>
                            <option class="sort-option" value="rating">Ratings</option>
                            <option class="sort-option" value="review">Reviews</option>
                        </select>
                    </p>
                </div>
            </div>
            <div class="row">
            {this.state.list.map(
                x => 
                    
                    <div class="col-sm-3"><RestaurantCard thumbnail_image={x.thumbnail_image} name = {x.name} cuisines = {x.cuisines} rating = {x.rating} reviews = {x.reviews}/></div>
                    
            )}
            </div>
        
            
            </div>
        </div>
        )
    };
}

export default Hotels;