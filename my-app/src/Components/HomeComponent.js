/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
class HomeComponent extends Component {
    constructor(){
        super();
        this.state={
            list:null
        }
    }
    componentDidMount(){
       this.getData();
    }
    getData(){
        fetch("https://localhost:5001/api/employees/").then((response) => {
                 response.json().then((result) => {
                         console.log(result);
                         this.setState({list:result})
                        })
                    })
    }
    delete(id){
      let res=confirm("Are you sure,You want to delete");
      if(res === true){
        fetch("https://localhost:5001/api/employees/"+id,{
            method:"Delete",

        }).then((response) => {
            response.json().then((result) => {
                    console.log(result);
                    this.getData();
                    })
               })
               
      }
      

    }
    render() {
        return (
            <div>
                {
                    this.state.list?
                    <div>
                       
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th></th>
                                    <th></th>
                                    
                                </tr></thead>
                                <tbody>
                                {
                            this.state.list.map((item)=>
                                <tr>
                                    <td>{item.empName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dep.depName}</td>
                                    <td>{item.salary}</td>
                                    <td><Link to={"/Details/"+item.empId }>Edit</Link></td>
                                    <td><button onClick={()=>this.delete(item.empId)}>Delete</button></td>
                                </tr>
                            
                            )
                        }
                        </tbody>
                        </Table>
                    </div>:
                    <h2>Please Wait.....</h2>
                }
                
            </div>
        );
    }
}

export default HomeComponent;
