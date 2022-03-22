using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Radnik")]
    public class Radnik
    {
        [Key]
        public int ID { get; set; } 

        [Required]
        [MaxLength(30)]
        public string Ime { get; set; }

        [Required]
        public int Jmbg { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string Profesija { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string Masina { get; set; }
        
        [Required]
        [Range(2,50)]
        public int IskustvoGod { get; set; }
        
        [Required]
        [Range(18,60)]
        public int BrojGodina { get; set; }

        public Firma Firma { get; set; }

        public Projekat Projekat { get; set; }
    }
}