using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryTrackerController : ControllerBase {
        [HttpGet]
        public ActionResult<List<InventoryTracker>> GetInventory()
        {
            var inventory = new List<InventoryTracker>
            {
                new InventoryTracker { 
                    Id = 1, 
                    Name = "Fabuloso", 
                    Remaining = 0,
                    Total = 0, 
                    Link = "https://www.grainger.com/product/FABULOSO-All-Purpose-Cleaner-Jug-55EY07"
                },
                new InventoryTracker { 
                    Id = 2, 
                    Name = "Windex", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 3, 
                    Name = "Bleach", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 4, 
                    Name = "Gloves", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 5, 
                    Name = "Stainless Steel Cleaner", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 6, 
                    Name = "Toilet Bowl Cleaner", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 7, 
                    Name = "Toilet Paper", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 8, 
                    Name = "Paper Towels", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },
                new InventoryTracker { 
                    Id = 9, 
                    Name = "Leather Polish", 
                    Remaining = 0,
                    Total = 0, 
                    Link = ""
                },

            };
            return Ok(inventory);
        }
    }
}