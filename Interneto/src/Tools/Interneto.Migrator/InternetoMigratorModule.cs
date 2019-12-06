using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using Interneto.EntityFramework;

namespace Interneto.Migrator
{
    [DependsOn(typeof(InternetoDataModule))]
    public class InternetoMigratorModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer<InternetoDbContext>(null);

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}