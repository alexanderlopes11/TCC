using System.Threading.Tasks;
using Abp.Application.Services;
using Interneto.Configuration.Dto;

namespace Interneto.Configuration
{
    public interface IConfigurationAppService: IApplicationService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}