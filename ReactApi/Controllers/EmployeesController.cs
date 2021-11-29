using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.IRepository;
using ReactApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IUow uow;

        public EmployeesController(IUow uow)
        {
            this.uow = uow;
        }
        // GET: api/<EmployeesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await uow.EmployeeRepo.GetEmployeesAsync());
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await uow.EmployeeRepo.FindEmployees(id));
        }

        // POST api/<EmployeesController>
        [HttpPost]
        public async Task<IActionResult> Post(Employee employee)
        {
            uow.EmployeeRepo.AddEmployees(employee);
            await uow.SaveAsync();
            return Ok(await uow.EmployeeRepo.FindEmployees(employee.EmpId));
        }

        // PUT api/<EmployeesController>/5
        [HttpPut]
        public async Task<IActionResult> Put( Employee employee)
        {
            
            uow.EmployeeRepo.UpdateEmployees(employee);
            await uow.SaveAsync();
            return Ok(employee);
        }

        // DELETE api/<EmployeesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var res = await uow.EmployeeRepo.FindEmployees(id);
            uow.EmployeeRepo.DeleteEmployees(res);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}
