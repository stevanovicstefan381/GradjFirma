using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Projekat")]
    public class Projekat
    {
        [Key]
        public int ID { get; set; }
        
        [Required]
        [MaxLength(40)]
        public string Naziv { get; set; }   
        
        [Required]
        public int BrojProjekta { get; set; }   
        
        [Required]
        [MaxLength(30)]
        public string Lokacija { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string TipProjekta { get; set; }

        [Required]
        [MaxLength(30)]
        public string Stanje { get; set; }
        
        [Required] 
        [Range(3,20)]
        public int BrojRadnika { get; set; }

        public Firma Firma { get; set; }

        public List<Radnik> SpisakRadnika { get; set; }




    }
}