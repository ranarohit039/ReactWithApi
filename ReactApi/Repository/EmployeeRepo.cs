using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.IRepository;
using ReactApi.Models;

namespace ReactApi.Repository
{
    public class EmployeeRepo : IEmployeeRepo
    {
        private readonly DataContext dc;

        public EmployeeRepo(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddEmployees(Employee  employee)
        {
            dc.Employees.AddAsync(employee);
        }

        public void DeleteEmployees(Employee employee)
        {
            dc.Remove(employee);
        }

        public async Task<Employee> FindEmployees(int id)
        {
            return await dc.Employees.Include(i => i.Dep).FirstOrDefaultAsync(i => i.EmpId == id);
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync()
        {
            return await dc.Employees.Include(i => i.Dep).ToListAsync();
        }

        public void UpdateEmployees(Employee employee)
        {
            dc.Employees.Update(employee);
        }
    }
}
