using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    DepId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.DepId);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Salary = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    DepId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpId);
                    table.ForeignKey(
                        name: "FK_Employees_Departments_DepId",
                        column: x => x.DepId,
                        principalTable: "Departments",
                        principalColumn: "DepId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "DepId", "DepName" },
                values: new object[] { 1, "Department1" });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "DepId", "DepName" },
                values: new object[] { 2, "Department2" });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "DepId", "DepName" },
                values: new object[] { 3, "Department3" });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "EmpId", "DepId", "Email", "EmpName", "Salary" },
                values: new object[,]
                {
                    { 2, 1, "employee2@gmail.com", "Employee2", 22000 },
                    { 5, 1, "employee5@gmail.com", "Employee5", 55000 },
                    { 1, 2, "employee1@gmail.com", "Employee1", 11000 },
                    { 6, 2, "employee6@gmail.com", "Employee6", 66000 },
                    { 3, 3, "employee3@gmail.com", "Employee3", 33000 },
                    { 4, 3, "employee4@gmail.com", "Employee4", 44000 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepId",
                table: "Employees",
                column: "DepId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
