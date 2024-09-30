namespace server.Models{
    public class Project {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required string Timeframe { get; set; }
        public string Link { get; set; } = "";
        public string Path { get; set; } = "";
        public string Description { get; set; } = "";
    }
}