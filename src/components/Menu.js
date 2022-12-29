import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/OrderStyle.css';



class Menu extends React.Component{

    constructor(){
        super();
        this.state = {
            price: '',
            quantity:0
        }
    }

    render(){
        return(
            
            <div className='container' style={{paddingBottom:20}}>
                <div className='row'>
                        <div className='col-sm-3'>
                            <div>
                                <img src={this.props.imgUrl} style={{
                                    height: 200,
                                    width: 200
                                    }}></img>
                            </div>
                            
                        </div>
                            <div className='desc col-sm-6' style={{paddingLeft:40}}>
                                <div className='column'>
                                    <h3 className='fname'>
                                    {this.props.name}
                                    </h3>
                                        <p>{this.props.desc}</p>
                                        <div className='row'>
                                        <p className='amount'>{'\u20B9'}  {this.props.price} </p>

                                        <button className="btn" value={this.props.price} onClick={()=>this.props.action(this.props.price,this.props.name,this.state.quantity)}>Add</button>
                                        </div>
                                </div>
                            </div>
                            <br/> 	
                            {/* <button className="btn" value={this.props.price} onClick={()=>this.props.action(this.props.price,this.props.name,this.state.quantity)}>Add</button> */}
                                {/* <p className='amount'>{'\u20B9'}  {this.props.price} </p> */}

                    </div> 
            </div>
            
        )
    }
}

export default Menu;