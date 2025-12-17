using Healthcare.Api.Data.Models;

// DTO for Appointment
namespace Healthcare.Api.DTOs
{
    public class TerminiDTO
    {
        public string Id { get; set; }
        public string DoktorId { get; set; }
        public string PacientId { get; set; }
        public DateTime DataTerminit { get; set; }
        public string Statusi { get; set; }

      

    }
}
