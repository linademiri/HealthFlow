// DTO for Patient
namespace Healthcare.Api.DTOs
{
    public class PacientDTO
    {
        public string Id { get; set; }
        public string Name { get; set; } 
        public string Surname { get; set; } 
        public DateTime Ditelindja { get; set; }
    }
}
