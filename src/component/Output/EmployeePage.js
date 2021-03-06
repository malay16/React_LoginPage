import React,{Component} from 'react'; 
import Employee from './Employee';
import axios from 'axios';

class EmployeePage extends Component{
    state={   user:[{ "id":1,"name":"test1","age" : "11","gender":"male","email" : "test1@gmail.com","phoneNo" : "9415346313"},
          { "id" : 2,"name":"test2","age" : "12","gender":"male","email" : "test2@gmail.com","phoneNo" : "9415346314" },
        { "id":3,"name":"test3","age" : "13","gender":"male","email" : "test3@gmail.com","phoneNo" : "9415346315" },
        {"id":4,"name":"test4","age" : "14","gender":"male","email" : "test4@gmail.com","phoneNo" : "9415346316"},
        {"id":5,"name":"test5","age" : "15","gender":"male","email" : "test5@gmail.com","phoneNo" : "9415346317"},      {        "id":6,        "name":"test6",        "age" : "16",        "gender":"male",        "email" : "test6@gmail.com",        "phoneNo" : "9415346318"      }   ] } 
    
    componentDidMount(){

        axios.get('https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users')
        .then(response=>{
            console.log(response.data)
           this.setState({user:response.data})        })
    }
        render(){
        
      
        // let empData = data.map((element) =>{
        //     console.log(element)
            return(
                <div>
                <center>
                <p>The Employee Data Page</p>
                </center>
                <div style={{"marginRight":"36%"}}>
                <Employee usersData={this.state.user}></Employee>
                </div>
                </div>
            )
        }}

export default EmployeePage;