namespace Healthcare.Api.DTOs
{
    public class UserManagerResponse
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; } // Add this property
        public string Message { get; set; }
        public bool isSucces { get; set; }
        public IEnumerable<string> Errors { get; set; }
        public DateTime? ExpireDate { get; set; }
        //public string Role { get; set; }


    }
}
