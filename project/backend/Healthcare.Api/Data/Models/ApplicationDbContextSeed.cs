// using Microsoft.AspNetCore.Identity;

// namespace Healthcare.Api.Data.Models
// {
//     public class ApplicationDbContextSeed
//     {
//         public static async Task SeedEssentialsAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
//         {
//             //Seed Roles
//             await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.Administrator.ToString()));
//             await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.Doctor.ToString()));
//             await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.User.ToString()));

//             //Seed Default User
//             var defaultUser = new User { UserName = Authorization.default_username, Email = Authorization.default_email, EmailConfirmed = true, PhoneNumberConfirmed = true };

//             if (userManager.Users.All(u => u.Id != defaultUser.Id))
//             {
//                 await userManager.CreateAsync(defaultUser, Authorization.default_password);
//                 await userManager.AddToRoleAsync(defaultUser, Authorization.default_role.ToString());
//             }
//         }
//     }
// }
using Microsoft.AspNetCore.Identity;

namespace Healthcare.Api.Data.Models
{
    public class ApplicationDbContextSeed
    {
        public static async Task SeedEssentialsAsync(
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            // ============================
            // 1. SEED ROLES (SAFE)
            // ============================

            if (!await roleManager.RoleExistsAsync(Authorization.Roles.Administrator.ToString()))
            {
                await roleManager.CreateAsync(
                    new IdentityRole(Authorization.Roles.Administrator.ToString()));
            }

            if (!await roleManager.RoleExistsAsync(Authorization.Roles.Doctor.ToString()))
            {
                await roleManager.CreateAsync(
                    new IdentityRole(Authorization.Roles.Doctor.ToString()));
            }

            if (!await roleManager.RoleExistsAsync(Authorization.Roles.User.ToString()))
            {
                await roleManager.CreateAsync(
                    new IdentityRole(Authorization.Roles.User.ToString()));
            }

            // ============================
            // 2. SEED DEFAULT USER (FIXED)
            // ============================

            var defaultUser = await userManager.FindByNameAsync(
                Authorization.default_username);

            if (defaultUser == null)
            {
                var user = new User
                {
                    UserName = Authorization.default_username,
                    Email = Authorization.default_email,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true,


                    FirstName = "Admin",
                    LastName = "System"
                };

                await userManager.CreateAsync(user, Authorization.default_password);
                await userManager.AddToRoleAsync(
                    user,
                    Authorization.default_role.ToString());
            }
        }
    }
}



