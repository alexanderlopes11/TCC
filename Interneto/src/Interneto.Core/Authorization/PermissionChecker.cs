using Abp.Authorization;
using Interneto.Authorization.Roles;
using Interneto.Authorization.Users;

namespace Interneto.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
