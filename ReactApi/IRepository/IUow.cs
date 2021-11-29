using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApi.IRepository
{
    public interface IUow
    {
        IEmployeeRepo EmployeeRepo { get; }
        IDepartmentRepo DepartmentRepo { get; }
        Task<bool> SaveAsync();
    }
}
