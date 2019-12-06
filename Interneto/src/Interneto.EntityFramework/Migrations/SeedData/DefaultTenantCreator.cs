using System.Linq;
using Interneto.EntityFramework;
using Interneto.MultiTenancy;

namespace Interneto.Migrations.SeedData
{
    public class DefaultTenantCreator
    {
        private readonly InternetoDbContext _context;

        public DefaultTenantCreator(InternetoDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateUserAndRoles();
        }

        private void CreateUserAndRoles()
        {
            //Default tenant

            var defaultTenant = _context.Tenants.FirstOrDefault(t => t.TenancyName == Tenant.DefaultTenantName);
            if (defaultTenant == null)
            {
                _context.Tenants.Add(new Tenant {TenancyName = Tenant.DefaultTenantName, Name = Tenant.DefaultTenantName});
                _context.SaveChanges();
            }
        }
    }
}
