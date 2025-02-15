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
        public string Address { get; set; } = "";
        public decimal Physics { get; set; }
        public decimal Chemistry { get; set; }
        public decimal Maths { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}