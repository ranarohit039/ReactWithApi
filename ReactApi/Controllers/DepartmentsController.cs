using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactApi.IRepository;
using ReactApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {

        private readonly IUow uow;

        public DepartmentsController(IUow uow)
        {
            this.uow = uow;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await uow.DepartmentRepo.GetDepartments());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Find(int id)
        {
            return Ok(await uow.DepartmentRepo.FindDepartments(id));
        }
        [HttpPost]
        public async Task<IActionResult> Add(Department department)
        {
            uow.DepartmentRepo.AddDepartments(department);
            await uow.SaveAsync();
            return Ok(await uow.DepartmentRepo.FindDepartments(department.DepId));
        }
        [HttpPut]
        public async Task<IActionResult> Update( Department department)
        {
           
            uow.DepartmentRepo.UpdateDepartments(department);
            await uow.SaveAsync();
            return Ok(department);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var res = await uow.DepartmentRepo.FindDepartments(id);
            uow.DepartmentRepo.DeleteDepartments(res);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}

