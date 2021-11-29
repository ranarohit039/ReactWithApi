/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

class DetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDep = this.onChangeDep.bind(this);
        this.onChangesalary = this.onChangesalary.bind(this);
        this.state = {

            depdata: [],
            Emp: {
                empName: "",
                email: "",
                salary: 0,
                depId: 0
            }
        }

    }

    onChangeName(e) {
        const Name = e.target.value;
        this.setState(function (prevState) {
            return {
                Emp: {
                    ...prevState.Emp,
                    empName: Name
                }
            }
        })
    }
    onChangeEmail(e) {
        const Email = e.target.value;
        this.setState(function (prevState) {
            return {
                Emp: {
                    ...prevState.Emp,
                    email: Email
                }
            }
        })
    }
    onChangeDep(e) {
        const Dep = e.target.value;
        this.setState(function (prevState) {
            return {
                Emp: {
                    ...prevState.Emp,
                    depId: Dep
                }
            }
        })
    }
    onChangesalary(e) {
        const Salary = e.target.value;
        this.setState(function (prevState) {
            return {
                Emp: {
                    ...prevState.Emp,
                    salary: Salary
                }
            }
        })
    }
    componentDidMount() {
        fetch("https://localhost:5001/api/employees/" + this.props.match.params.id).then((Response) => {
            Response.json()
            .then((result) => {
                this.setState({
                    Emp: {
                        empName: result.empName,
                        email: result.email,
                        salary: result.salary,
                        empId: result.empId,
                        depId: result.depId
                    }
                });
            }
            )
        })
        fetch("https://localhost:5001/api/departments/").then((Response) => { Response.json().then((result) => { this.setState({ depdata: result }) }) })
    }
    update() {
        let res=confirm("Are you Sure Want to register here.");
        if(res === true ){

        fetch("https://localhost:5001/api/employees/", {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.Emp)
        }).then((Response) => { Response.json().then((result) => { console.log(result) }) });
        console.log(this.state.Emp);

    }};

    render() {



        return (
        <div class="st1">
            <div>
                <h2>Edit Here</h2>
                    <Form>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control value={this.state.Emp.empName} type="text" placeholder="enter your name" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeName} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control  value={this.state.Emp.email} type="email" placeholder="enter your email" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeEmail} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Salary
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control value={this.state.Emp.salary} type="number" placeholder="enter your name" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangesalary} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                                Department
                            </Form.Label>
                            <Col sm={5}>
                        <Form.Select  onChange={this.onChangeDep} value={this.state.Emp.depId}>
                        <option value="" selected >select department</option>
                        {
                            this.state.depdata.map((item) =>
                                <option value={item.depId}  >{item.depName}</option>
                            )
                        }
                            
                        </Form.Select>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col md={{ span:10, offset:1 }}>
                                <Button  onClick={() => { this.update() }}><Link to="/">Create</Link>Create</Button>
                            </Col>
                        </Form.Group>
                    </Form>

                    {/* <input value={this.state.Emp.empName} placeholder="enter your name" onChange={this.onChangeName} /><br /><br />
                    <input value={this.state.Emp.email} placeholder="enter your email" onChange={this.onChangeEmail} /><br /><br />
                    <select onChange={this.onChangeDep} value={this.state.Emp.depId} >

                        {
                            this.state.depdata.map((item) =>
                                <option value={item.depId} >{item.depName}</option>
                            )
                        }
                    </select><br /> <br />
                    <input value={this.state.Emp.salary} placeholder="enter your salary" onChange={this.onChangesalary} /><br /><br /> */}
                    {/* <button onClick={() => { this.update() }}>Update</button> */}
                </div>
            </div>

        );
    }
}

export default DetailsComponent;