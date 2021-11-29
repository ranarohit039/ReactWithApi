import React, { Component } from 'react';

class Create extends Component {
    constructor(){
        super();
        this.state={
            
            depdata:[],
          empName:null,
            email:null,
            salary:null,
            depId:null,
            empId:null
        }
    
    }
    
    componentDidMount(){
        fetch("https://localhost:5001/api/departments/").then((Response)=>{Response.json().then((result)=>{this.setState({depdata:result})})})
    }
    Create(){
        console.log(this.state);
        fetch("https://localhost:5001/api/employees/",{
            method:"post",
            headers:{
                "Content-Type":"application/json" },
            body:JSON.stringify(this.state)
        }).then((Response)=>{Response.json().then((result)=>{console.log(result)})});
        
    }
    render() {
        return (
            <div>
                <h2>Rigster Here</h2>
                <div>
                    <input type="text"  placeholder="enter your name" onChange={(event)=>{this.setState({empName: event.target.value})}} /><br/><br/>
                    <input type="email"  placeholder="enter your email" onChange={(event)=>{this.setState({email: event.target.value})}} /><br/><br/>
                   <select placeholder="select department" onChange={(event)=>{this.setState({depId: parseInt(event.target.value)})}}>
                   <option placeholder="select department"  selected >select department</option>
                       {
                           this.state.depdata.map((item)=>
                           <option value={item.depId}  >{item.depName}</option>
                           )
                       }
                   </select><br/> <br/>
                    <input type="salary"  placeholder="enter your salary" onChange={(event)=>{this.setState({salary: event.target.value})}} /><br/><br/>
                   <button onClick={()=>{this.Create()}}>Create</button>
                </div>
            </div>
        );
    }
}

export default Create;