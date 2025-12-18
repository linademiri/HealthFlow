// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Design;

// namespace Healthcare.Api.Data
// {
//     public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
//     {
//         public ApplicationDbContext CreateDbContext(string[] args)
//         {
//             var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();

//             // Vendos connection string tëndin këtu
//             optionsBuilder.UseSqlServer("Server=localhost;Database=HealthFlowDb;Trusted_Connection=True;");

//             return new ApplicationDbContext(optionsBuilder.Options);
//         }
//     }
// }
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Healthcare.Api.Data.Models;

namespace Healthcare.Api.Data
{
    public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();

            // Vendos connection string tëndin MySQL këtu
            optionsBuilder.UseMySql(
                "Server=localhost;Database=healthcare_db;User=root;Password=Shtator.mars2004;",
                new MySqlServerVersion(new Version(8, 0, 33)) // vendos versionin që ke në MySQL
            );

            return new ApplicationDbContext(optionsBuilder.Options);
        }
    }
}

