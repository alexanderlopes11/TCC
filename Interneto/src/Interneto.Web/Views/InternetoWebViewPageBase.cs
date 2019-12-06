using Abp.Web.Mvc.Views;

namespace Interneto.Web.Views
{
    public abstract class InternetoWebViewPageBase : InternetoWebViewPageBase<dynamic>
    {

    }

    public abstract class InternetoWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected InternetoWebViewPageBase()
        {
            LocalizationSourceName = InternetoConsts.LocalizationSourceName;
        }
    }
}