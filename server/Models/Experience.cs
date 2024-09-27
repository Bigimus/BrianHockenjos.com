using System.ComponentModel;

namespace server.Models{

    public class Description {
        public int Id { get; set; }
        public string info { get; set; } = "";
    }
    public class Experience {
        public int Id { get; set; }
        public string Company { get; set; } = "";
        public string Position { get; set; } = "";
        public string Timeframe { get; set; } = "";
        public required List<Description> Descriptions { get; set; }
    }
}