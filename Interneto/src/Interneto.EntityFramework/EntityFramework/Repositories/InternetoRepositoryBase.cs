using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace Interneto.EntityFramework.Repositories
{
    public abstract class InternetoRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<InternetoDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected InternetoRepositoryBase(IDbContextProvider<InternetoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class InternetoRepositoryBase<TEntity> : InternetoRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected InternetoRepositoryBase(IDbContextProvider<InternetoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
