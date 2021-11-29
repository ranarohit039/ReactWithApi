using Microsoft.EntityFrameworkCore;
using ReactApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApi.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Department>().HasData(
                new { DepId = 1, DepName = "Department1" },
                new { DepId = 2, DepName = "Department2" },
                new { DepId = 3, DepName = "Department3" }
                );
            builder.Entity<Employee>().HasData(
                new { EmpId = 1, EmpName = "Employee1", Email = "employee1@gmail.com",  Salary = 11000, DepId = 2 },
                new { EmpId = 2, EmpName = "Employee2", Email = "employee2@gmail.com",  Salary = 22000, DepId = 1 },
                new { EmpId = 3, EmpName = "Employee3", Email = "employee3@gmail.com",  Salary = 33000, DepId = 3 },
                new { EmpId = 4, EmpName = "Employee4", Email = "employee4@gmail.com",  Salary = 44000, DepId = 3 },
                new { EmpId = 5, EmpName = "Employee5", Email = "employee5@gmail.com",  Salary = 55000, DepId = 1 },
                new { EmpId = 6, EmpName = "Employee6", Email = "employee6@gmail.com",  Salary = 66000, DepId = 2 });
        }
    }
}
