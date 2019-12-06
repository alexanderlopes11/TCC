using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Interneto.Configuration.Dto;

namespace Interneto.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : InternetoAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
