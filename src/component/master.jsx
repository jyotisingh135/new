import React from 'react';
//import './js/bootstrab.min.js';
class Master extends React.Component{
    render(){
        return(
            <div className='jumbotron-fluid bg-danger'>
                <div className='col-sm-4'>
                    <Header/>
                </div>
                <div className='col-sm-8'>jhdfgvjs</div>
            </div>
        );
    }

}
const Header=()=>{
        return(
            <div>
            <button className='btn-primary'>HOME</button>
            </div>
        );

}
export default Master;