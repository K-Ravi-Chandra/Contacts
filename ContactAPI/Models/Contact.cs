// Delcare all Attributes

namespace ContactAPI.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string? firstname { get; set; }
        public string? lastname { get; set; }
        public string? gender { get; set; }
        public string? dob { get; set; }
        public string? email { get; set; }
        public string? phone { get; set; }
        public string? city { get; set; }
        public string? state { get; set; }
        public string? country { get; set; }
        public string? picture { get; set; }

    }
}
