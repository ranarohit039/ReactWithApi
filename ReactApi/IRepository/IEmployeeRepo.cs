using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.Models;

namespace ReactApi.IRepository
{
    public interface IEmployeeRepo
    {
        Task<IEnumerable<Employee>> GetEmployeesAsync();
        Task<Employee> FindEmployees(int id);
        void AddEmployees(Employee employee);
        void DeleteEmployees(Employee employee);
        void UpdateEmployees(Employee employee);
    }
}
