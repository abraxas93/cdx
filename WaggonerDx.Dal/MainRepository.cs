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
            [Column("id")]
            public int Id { get; set; }

            [Column("first_name")]
            public string FirstName { get; set; }

            [Column("last_name")]
            public string LastName { get; set; }

            [Column("phone_number")]
            public string PhoneNumber { get; set; }

            [Column("email")]
            public string Email { get; set; }

            [Column("company_name")]
            public string CompanyName { get; set; }

            [Column("website_url")]
            public string WebsiteUrl { get; set; }

            [Column("address")]
            public string Address { get; set; }

            [Column("city")]
            public string City { get; set; }

            [Column("state")]
            public string State { get; set; }

            [Column("country")]
            public string Country { get; set; }

            [Column("zip_code")]
            public string ZipCode { get; set; }

            [Column("source")]
            public string Source { get; set; }
        }

        public DbSet<RegisteredUsers> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=dx.sqlite");
        }
    }
}
