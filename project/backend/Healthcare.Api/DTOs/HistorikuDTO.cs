using Healthcare.Api.Data.Models;

// DTO for Medical History
namespace Healthcare.Api.DTOs
{
    public class HistorikuDTO
    {
        public string Id { get; set; }
        public string MjekuId { get; set; }
        public string PacientId { get; set; }

        public DateTime Data { get; set; }
        public string? Anamneza_Statusi { get; set; }
        public string? Ekzaminimi { get; set; }
        public string? Diagnoza { get; set; }
        public string? Terapia { get; set; }
        public string? Perfundimi { get; set; }
    }
}
