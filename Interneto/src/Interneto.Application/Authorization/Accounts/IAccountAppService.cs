using System.Threading.Tasks;
using Abp.Application.Services;
using Interneto.Authorization.Accounts.Dto;

namespace Interneto.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
