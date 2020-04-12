import React, { Component } from 'react';

class Employee extends Component {
    render() {
        console.log("malay")
        console.log(this.props.usersData)
        function formatDate(date) { 
            var day = date.getDate(); 
            if (day < 10) { 
                day = "0" + day; 
            } 
            var month = date.getMonth() + 1; 
            if (month < 10) { 
                month = "0" + month; 
            } 
            var year = date.getFullYear(); 
            return day + "/" + month + "/" + year; 
        }

        return (<div>
            <table border={4} style={{ border:'ridge 5px red' , backgroundColor:'#04346c', color:'#FFF' ,marginLeft:'40%'}}>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>CreatedAt</th>
                        <th>name</th>
                        <th>avatar</th>
                                        </tr>
                </thead>
                <tbody>
                    {this.props.usersData.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{formatDate(new Date(item.createdAt))}</td>
                            <td>{item.name}</td>
                    <td><a href={item.avatar} target="_blank" style={{"color":"white"}}>{item.avatar}</a></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }



}

export default Employee;