namespace backend.Models
{
    public class User
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string Profile { get; set; } = "";
        public string Description { get; set; } = "";
        public string Email { get; set; } = "";
        public string AddressText { get; set; } = "";
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal Physics { get; set; }
        public decimal Chemistry { get; set; }
        public decimal Maths { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}