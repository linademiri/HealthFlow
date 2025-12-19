using System.ComponentModel.DataAnnotations;

namespace Healthcare.Api.Data.Models
{
    public class Dhoma
    {
        [Key]
        public string Id { get; set; }
        public string NrDhomes { get; set; }
        public string? Lloji_Dhomes { get; set; }

        public int Kapaciteti { get; set; }
        public bool Available { get; set; }

        public List<DhomaPacientit> DhomaPacienteve { get; set; }//

    }
}
