using Healthcare.Api.Data.Models;

// DTO for Patient Room assignments
namespace Healthcare.Api.DTOs
{
    public class DhomaPacientitDTO
    {
        public string Id { get; set; }
        public string PacientId { get; set; }
        public string DhomaId { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime? CheckOutDate { get; set; }
    }
}
