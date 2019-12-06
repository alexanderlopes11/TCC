using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Interneto.Roles.Dto;
using Interneto.Users.Dto;

namespace Interneto.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UpdateUserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();
    }
}