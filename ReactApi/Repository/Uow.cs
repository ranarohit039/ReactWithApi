using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactApi.IRepository;
using ReactApi.Models;

namespace ReactApi.Repository
{
    public class Uow : IUow
    {
        private readonly DataContext dc;

        public Uow(DataContext dc)
        {
            this.dc = dc;
        }
        public IEmployeeRepo EmployeeRepo => new EmployeeRepo(dc);

        public IDepartmentRepo DepartmentRepo => new DepartmentRepo(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
