// using Microsoft.AspNetCore.Identity;
// using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore;
// using Healthcare.Api.Data.Models;

// public class ApplicationDbContext : IdentityDbContext<User>  // Use User here instead of IdentityUser
// {
//     public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
//     {
//     }

//     // Removed DbSet<User> as it's automatically handled by IdentityDbContext
//     public new DbSet<Role> Roles { get; set; }
//     public DbSet<Mjeku> Mjeket { get; set; }
//     public DbSet<Pacienti> Pacientet { get; set; }
//     public DbSet<Termini> Terminet { get; set; }
//     public DbSet<Historiku> Historiks { get; set; }
//     public DbSet<Fatura> Faturat { get; set; }
//     public DbSet<Sherbimi> Sherbimet { get; set; }
//     public DbSet<Dhoma> Dhomat { get; set; }
//     public DbSet<DhomaPacientit> DhomaPacienteve { get; set; }

//     protected override void OnModelCreating(ModelBuilder modelBuilder)
//     {
//         base.OnModelCreating(modelBuilder);

//         // Ensure correct mapping for Identity
//         modelBuilder.Entity<User>()
//             .ToTable("AspNetUsers");

//         modelBuilder.Entity<IdentityRole>()
//             .ToTable("AspNetRoles");

//         // One-to-many relationship between Pacienti and Termini
//         modelBuilder.Entity<Pacienti>()
//             .HasMany(p => p.Terminet)
//             .WithOne(t => t.Pacienti)
//             .HasForeignKey(t => t.PacientId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Mjeku and Termini
//         modelBuilder.Entity<Mjeku>()
//             .HasMany(m => m.Terminet)
//             .WithOne(t => t.Mjeku)
//             .HasForeignKey(t => t.DoktorId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Pacienti and Historiku
//         modelBuilder.Entity<Pacienti>()
//             .HasMany(p => p.Historiks)
//             .WithOne(h => h.Pacienti)
//             .HasForeignKey(h => h.PacientId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Mjeku and Historiku
//         modelBuilder.Entity<Mjeku>()
//             .HasMany(m => m.Historiqet)
//             .WithOne(h => h.Mjeku)
//             .HasForeignKey(h => h.MjekuId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Sherbimi and Fatura
//         modelBuilder.Entity<Sherbimi>()
//             .HasMany(s => s.Faturat)
//             .WithOne(f => f.Sherbimi)
//             .HasForeignKey(f => f.SherbimiId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Pacienti and Fatura
//         modelBuilder.Entity<Pacienti>()
//             .HasMany(p => p.Faturat)
//             .WithOne(f => f.Pacienti)
//             .HasForeignKey(f => f.PacientId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Dhoma and DhomaPacientit
//         modelBuilder.Entity<Dhoma>()
//             .HasMany(d => d.DhomaPacienteve)
//             .WithOne(dp => dp.Dhoma)
//             .HasForeignKey(dp => dp.DhomaId)
//             .OnDelete(DeleteBehavior.Restrict);

//         // One-to-many relationship between Pacienti and DhomaPacientit
//         modelBuilder.Entity<Pacienti>()
//             .HasMany(p => p.DhomaPacienteve)
//             .WithOne(dp => dp.Pacienti)
//             .HasForeignKey(dp => dp.PacientId)
//             .OnDelete(DeleteBehavior.Restrict);

//         modelBuilder.Entity<Pacienti>()
//             .HasOne(p => p.User)
//             .WithMany()
//             .HasForeignKey(p => p.UserId)
//             .OnDelete(DeleteBehavior.Restrict);
//     }
// }
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Healthcare.Api.Data.Models;

public class ApplicationDbContext : IdentityDbContext<User>  // Use User instead of IdentityUser
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public new DbSet<Role> Roles { get; set; }
    public DbSet<Mjeku> Mjeket { get; set; }
    public DbSet<Pacienti> Pacientet { get; set; }
    public DbSet<Termini> Terminet { get; set; }
    public DbSet<Historiku> Historiks { get; set; }
    public DbSet<Fatura> Faturat { get; set; }
    public DbSet<Sherbimi> Sherbimet { get; set; }
    public DbSet<Dhoma> Dhomat { get; set; }
    public DbSet<DhomaPacientit> DhomaPacienteve { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // ==========================
        // Identity mapping for MySQL
        // ==========================
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("AspNetUsers");

            entity.Property(u => u.UserName).HasColumnType("varchar(256)");
            entity.Property(u => u.NormalizedUserName).HasColumnType("varchar(256)");
            entity.Property(u => u.Email).HasColumnType("varchar(256)");
            entity.Property(u => u.NormalizedEmail).HasColumnType("varchar(256)");
            entity.Property(u => u.PasswordHash).HasColumnType("longtext");
            entity.Property(u => u.SecurityStamp).HasColumnType("longtext");
            entity.Property(u => u.ConcurrencyStamp).HasColumnType("longtext");
        });

        modelBuilder.Entity<IdentityRole>(entity =>
        {
            entity.ToTable("AspNetRoles");

            entity.Property(r => r.Name).HasColumnType("varchar(256)");
            entity.Property(r => r.NormalizedName).HasColumnType("varchar(256)");
            entity.Property(r => r.ConcurrencyStamp).HasColumnType("longtext");
        });

        modelBuilder.Entity<IdentityUserRole<string>>().ToTable("AspNetUserRoles");
        modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("AspNetUserClaims");
        modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("AspNetUserLogins");
        modelBuilder.Entity<IdentityUserToken<string>>().ToTable("AspNetUserTokens");
        modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("AspNetRoleClaims");

        // ==========================
        // Application Relationships
        // ==========================

        // Pacienti - Termini
        modelBuilder.Entity<Pacienti>()
            .HasMany(p => p.Terminet)
            .WithOne(t => t.Pacienti)
            .HasForeignKey(t => t.PacientId)
            .OnDelete(DeleteBehavior.Restrict);

        // Mjeku - Termini
        modelBuilder.Entity<Mjeku>()
            .HasMany(m => m.Terminet)
            .WithOne(t => t.Mjeku)
            .HasForeignKey(t => t.DoktorId)
            .OnDelete(DeleteBehavior.Restrict);

        // Pacienti - Historiku
        modelBuilder.Entity<Pacienti>()
            .HasMany(p => p.Historiks)
            .WithOne(h => h.Pacienti)
            .HasForeignKey(h => h.PacientId)
            .OnDelete(DeleteBehavior.Restrict);

        // Mjeku - Historiku
        modelBuilder.Entity<Mjeku>()
            .HasMany(m => m.Historiqet)
            .WithOne(h => h.Mjeku)
            .HasForeignKey(h => h.MjekuId)
            .OnDelete(DeleteBehavior.Restrict);

        // Sherbimi - Fatura
        modelBuilder.Entity<Sherbimi>()
            .HasMany(s => s.Faturat)
            .WithOne(f => f.Sherbimi)
            .HasForeignKey(f => f.SherbimiId)
            .OnDelete(DeleteBehavior.Restrict);

        // Pacienti - Fatura
        modelBuilder.Entity<Pacienti>()
            .HasMany(p => p.Faturat)
            .WithOne(f => f.Pacienti)
            .HasForeignKey(f => f.PacientId)
            .OnDelete(DeleteBehavior.Restrict);

        // Dhoma - DhomaPacientit
        modelBuilder.Entity<Dhoma>()
            .HasMany(d => d.DhomaPacienteve)
            .WithOne(dp => dp.Dhoma)
            .HasForeignKey(dp => dp.DhomaId)
            .OnDelete(DeleteBehavior.Restrict);

        // Pacienti - DhomaPacientit
        modelBuilder.Entity<Pacienti>()
            .HasMany(p => p.DhomaPacienteve)
            .WithOne(dp => dp.Pacienti)
            .HasForeignKey(dp => dp.PacientId)
            .OnDelete(DeleteBehavior.Restrict);

        // Pacienti - User
        modelBuilder.Entity<Pacienti>()
            .HasOne(p => p.User)
            .WithMany()
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
