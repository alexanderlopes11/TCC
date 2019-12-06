using System.Threading.Tasks;
using Abp.Application.Services;
using Interneto.Sessions.Dto;

namespace Interneto.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
