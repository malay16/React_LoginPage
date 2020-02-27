import React, { Component } from 'react';

class Employee extends Component {
    render() {
        console.log("malay")
        console.log(this.props.usersData)
        return (<div>
            <table border={4} style={{ border:'ridge 5px red' , backgroundColor:'#04346c', color:'#FFF' ,marginLeft:'40%'}}>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.usersData.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }



}

export default Employee;