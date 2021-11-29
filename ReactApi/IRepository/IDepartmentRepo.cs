using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.Models;

namespace ReactApi.IRepository
{
    public interface IDepartmentRepo
    {
        Task<IEnumerable<Department>> GetDepartments();
        Task<Department> FindDepartments(int id);
        void AddDepartments(Department department);
        void DeleteDepartments(Department department);
        void UpdateDepartments(Department department);
    }
}
