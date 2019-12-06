using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Interneto.MultiTenancy.Dto;

namespace Interneto.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
