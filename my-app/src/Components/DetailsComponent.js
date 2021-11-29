import React, { Component } from 'react';

class DetailsComponent extends Component {
    constructor(props){
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeDep=this.onChangeDep.bind(this);
        this.onChangesalary=this.onChangesalary.bind(this);
        this.state={
            
            depdata:[],
            Emp:{
          empName:"",
            email:"",
            salary:0,
            depId:0
            }
        }
    
    }
  
    onChangeName(e){
        const Name=e.target.value;
        this.setState(function(prevState){
            return{
                Emp:{
                    ...prevState.Emp,
                    empName:Name
                }
            }
        })
    }
    onChangeEmail(e){
        const Email=e.target.value;
        this.setState(function(prevState){
            return{
                Emp:{
                    ...prevState.Emp,
                    email:Email
                }
            }
        })
    }
    onChangeDep(e){
        const Dep=e.target.value;
        this.setState(function(prevState){
            return{
                Emp:{
                    ...prevState.Emp,
                    depId:Dep
                }
            }
        })
    }
    onChangesalary(e){
        const Salary=e.target.value;
        this.setState(function(prevState){
            return{
                Emp:{
                    ...prevState.Emp,
                    salary:Salary
                }
            }
        })
    }
    componentDidMount(){
        fetch("https://localhost:5001/api/employees/"+this.props.match.params.id).then((Response)=>{Response.json()
        .then((result)=>{this.setState({Emp:{
            empName:result.empName,
            email:result.email,
            salary:result.salary,
            empId:result.empId,
            depId:result.depId
        }});
        }
        )})
        fetch("https://localhost:5001/api/departments/").then((Response)=>{Response.json().then((result)=>{this.setState({depdata:result})})})
    }
    update() {
        
        fetch("https://localhost:5001/api/employees/",{
            method:"Put",
            headers:{
                "Content-Type":"application/json" },
            body:JSON.stringify(this.state.Emp)
        }).then((Response)=>{Response.json().then((result)=>{console.log(result)})});
        console.log(this.state.Emp);

    };
    
    render() {

       
       
        return (
            <div>
                <h2>Edit Here</h2>
                <div>
                    <input value={this.state.Emp.empName} placeholder="enter your name"  onChange={this.onChangeName} /><br/><br/>
                    <input  value={this.state.Emp.email}  placeholder="enter your email" onChange={this.onChangeEmail} /><br/><br/>
                   <select onChange={this.onChangeDep} value={this.state.Emp.depId} >
                   
                       {
                           this.state.depdata.map((item)=>
                           <option  value={item.depId} >{item.depName}</option>
                           )
                       }
                   </select><br/> <br/>
                    <input value={this.state.Emp.salary}  placeholder="enter your salary" onChange={this.onChangesalary} /><br/><br/>
                   <button onClick={()=>{this.update()}}>Update</button>
                </div>
            </div>
        
        );
    }
}

export default DetailsComponent;