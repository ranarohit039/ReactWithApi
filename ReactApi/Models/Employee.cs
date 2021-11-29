using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApi.Models
{
    public class Employee
    {
            [Key]
            public int EmpId { get; set; }
            [Required]
            [Column(TypeName = "nvarchar(100)")]
            public string EmpName { get; set; }
            [Required]
            public int Salary { get; set; }
            [Required]
            [Column(TypeName = "nvarchar(100)")]
            public string Email { get; set; }

            public int DepId { get; set; }
            public Department Dep { get; set; }
        
    }
}
