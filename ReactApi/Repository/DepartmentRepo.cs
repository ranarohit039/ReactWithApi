using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.IRepository;
using ReactApi.Models;

namespace ReactApi.Repository
{
    public class DepartmentRepo : IDepartmentRepo
    {
        private readonly DataContext dc;

        public DepartmentRepo(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddDepartments(Department department)
        {
            dc.Departments.AddAsync(department);
        }

        public void DeleteDepartments(Department department)
        {
            dc.Departments.Remove(department);
        }

        public async Task<Department> FindDepartments(int id)
        {
            return await dc.Departments.Where(i => i.DepId == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Department>> GetDepartments()
        {
            return await dc.Departments.ToListAsync();
        }

        public void UpdateDepartments(Department department)
        {
            dc.Departments.Update( department);
        }
    }
}
