namespace server.Models{
    public class Library {
        public int Id { get; set; }
        public string Name { get; set; } = "";
    }
    public class Skill {
        public required int Id { get; set; }
        public required string Language { get; set; } = "";
        public required List<Library> Libraries { get; set; }
    }
}