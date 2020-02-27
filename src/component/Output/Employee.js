import React, { Component } from 'react';

class Employee extends Component {
    render() {
        console.log("malay")
        console.log(this.props.usersData)
        return (<div style={{backgroundColor:'lightgreen',marginLeft:'36%',marginRight:'34%'}}>
            <table border={4}>
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