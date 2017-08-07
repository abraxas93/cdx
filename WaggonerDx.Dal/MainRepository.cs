using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WaggonerDx.Dal
{
    public class MainRepository : DbContext
    {
        [Table("registered-users")]
        public class RegisteredUsers
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }
            public string Email { get; set; }
        }

        public DbSet<RegisteredUsers> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"DataSource=:memory:");
        }
    }
}
