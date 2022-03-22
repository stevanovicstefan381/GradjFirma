using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Firma")]
    public class Firma
    {
        [Key]
        public int ID { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string Naziv { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Adresa { get; set; }
        
        [Required]
        [Range(100,3000)]
        public int PIB { get; set; }

        [Required]
        [Range(100,3000)]
        public int MB { get; set; }
 
        [Required]
        [MaxLength(30)]
        public string Zastupnik { get; set; }

        public List<Radnik> SviRadnici { get; set; }

        public List<Masina> SveMasine { get; set; }

        public List<Projekat> SviProjekti { get; set; }

    }
}