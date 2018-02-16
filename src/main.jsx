import React from 'react';
import './App.css';
class Main extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            city:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

            name: document.getElementById('name').value,
            city: document.getElementById('city').value

        console.log(data);
        this.setState({
            name: data.name,
            city: data.city
        });
        fetch('http://localhost:3001/new',{

            method:'POST',
            headers:{'Accept':'application/json',
                'Content-Type':'application/json'},
            body:JSON.stringify({username:'dmck',password:'mdkcm'})
        }).then((response)=>{
            if(response.status>=400){
                throw new Error('Bad response from server');

            }
            //console.log(response.status);
            console.log(response);
            return response;
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               <div>
                   <input type='text' id='name'/>
               </div>
               <div>
                   <input type='text' id='city'/>
               </div>
               <div>
                   <input type='submit' value='submit'/>
               </div>
           </form>
        );
    }
}
export default Main;