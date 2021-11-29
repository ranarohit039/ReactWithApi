/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import '../App.css';
import { Form, Col, Row, Button } from 'react-bootstrap';

class Create extends Component {
    constructor() {
        super();
        this.state = {

            depdata: [],
            empName: null,
            email: null,
            salary: null,
            depId: null,
            
        }

    }

    componentDidMount() {
        fetch("https://localhost:5001/api/departments/").then((Response) => { Response.json().then((result) => { this.setState({ depdata: result }) }) })
    }
    Create() {
        let res=confirm("Are you Sure Want to register here.");
        if(res === true ){
        
        fetch("https://localhost:5001/api/employees/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((Response) => { Response.json().then((result) => { console.log(result) }) });
    }

    }
    render() {
        return (
            <div class="st1">
                <div>
                <h2>Rigster Here</h2>
                    <Form>
                        
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm={2}>
                                Name
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" placeholder="enter your name" aria-describedby="inputGroup-sizing-sm" onChange={(event) => { this.setState({ empName: event.target.value }) }} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="email" placeholder="enter your email" aria-describedby="inputGroup-sizing-sm" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm={2}>
                                Salary
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="number" placeholder="enter your salary" onChange={(event) => { this.setState({ salary: event.target.value }) }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                                Department
                            </Form.Label>
                            <Col sm={5}>
                        <Form.Select aria-label="Default select example" onChange={(event) => { this.setState({ depId: parseInt(event.target.value) }) }}>
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
                                <Button  onClick={() => { this.Create() }}>Create</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                   
                </div>
            </div>
        );
    }
}

export default Create;