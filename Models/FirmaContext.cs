using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class FirmaContext : DbContext
    {
        public DbSet<Firma> Firme { get; set; }
        public DbSet<Radnik> Radnici { get; set; }
        public DbSet<Masina> Masine { get; set; }
        public DbSet<Projekat> Projekti { get; set; }

        public FirmaContext(DbContextOptions options) : base(options)
        {

        }

       /* protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Radnik>()
            .HasOne(p=>p.masina)
            .WithOne(q=>q.radnik)
            .HasForeignKey<Masina>(r=>r.RadnikFK);
        } */
    }
}