// DTO for Patient Details with related data
namespace Healthcare.Api.DTOs
{
    public class PatientDetailsDTO
    {
        public PacientDTO Patient { get; set; }
        public List<TerminiDTO> Terminet { get; set; }
        public List<HistorikuDTO> Historiku { get; set; }
        public List<DhomaPacientitDTO> DhomaPacienteve { get; set; }


    }
}
