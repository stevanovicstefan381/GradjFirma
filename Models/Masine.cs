using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Masina")]
    public class Masina
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(15)]
        public string Tip { get; set; }
        
        [Required]
        public int BrojRadnihSati { get; set; }
        
        [Required]
        [Range(2000,2022)]
        public int Godiste { get; set; }

        [Required]
        [MaxLength(10)]
        public string Stanje { get; set; }

        [Required]
        public int IdentifikacioniBroj { get; set; }

        public Firma Firma { get; set; }

        [ForeignKey("RadnikFK")]
        public int RadnikFK { get; set; }



    }
}