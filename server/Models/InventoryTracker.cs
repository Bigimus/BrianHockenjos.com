namespace server.Models{
    public class InventoryTracker {
        public int Id { get; set; }
        public required string Name { get; set; }
        public int Remaining { get; set; } = 0;
        public int Total { get; set; } = 0;
        public required string  Link { get; set; }
    }
}