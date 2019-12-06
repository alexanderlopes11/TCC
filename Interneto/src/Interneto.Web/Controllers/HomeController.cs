using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace Interneto.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : InternetoControllerBase
    {
        public ActionResult Index()
        {
            return View("~/App/Main/views/layout/layout.cshtml"); //Layout of the angular application.
        }
	}
}