import React from 'react';
import './App.css';
class Content extends React.Component{
        constructor(){
                super();
                this.insertdata=this.insertdata.bind(this);
        }
insertdata(){
                var id,city,name;
                id=document.getElementById('id').value;
                city=document.getElementById('city').value;
                name=document.getElementById('name').value;
                var xhttp=new XMLHttpRequest();
                xhttp.onreadystatechange=()=>{
                        if(xhttp.readyState==4){
                                console.log(xhttp.responseText);
                        }
                }
                xhttp.open('GET','E://nodet/node/mysqldb.js?'+id+'&'+name+'&'+city,true);
                xhttp.send();
}
render() {
    return (
        <div className='content'><h1>Register</h1>
            <form onSubmit={this.insertdata}>
                <table>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input type="text" id='id'/></td>

                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" id='name'/></td>

                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type="text" id='city'/></td>

                    </tr>
                    <td colSpan='2' align="right">
                        <input type='submit' value="ADD"/>
                    </td>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
}
export default Content;