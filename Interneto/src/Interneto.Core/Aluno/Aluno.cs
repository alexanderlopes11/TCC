using Interneto.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interneto.Usuário
{
    [Table("Alunos")]
    public sealed class Aluno : User
    {
        [Required]
        [StringLength(100)]
        public override string UserName { get; set; }

        [StringLength(100, ErrorMessage = InternetoConsts.StringLenghtMsg, MinimumLength = 2)]
        public override string Name { get; set; }

        [Required(AllowEmptyStrings = true)]
        [StringLength(100)]
        public override string Surname { get; set; } = string.Empty;

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        [DataType(DataType.Date)]
        public DateTime? DataNascimento { get; set; }
    }
}
