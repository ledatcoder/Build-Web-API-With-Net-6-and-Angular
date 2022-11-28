using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product> Products {set;get;}
        public DbSet<ProductBrand> ProductBrands {set;get;}
        public DbSet<ProductType> ProductTypes {set;get;}

    }
}

