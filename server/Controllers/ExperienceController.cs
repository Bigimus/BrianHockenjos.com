using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienceController : ControllerBase {

        [HttpGet]
        public ActionResult<List<Experience>> GetProducts()
        {
            // Create a list of products
            var products = new List<Experience>
            {
                new Experience { Id = 1, Name = "Example Experience #1", Timeframe = "Sep 2024 - TBD", Description = "Example Experience Description" },
                new Experience { Id = 2, Name = "Example Experience #2", Timeframe = "Sep 2024 - TBD", Description = "Example Experience Description" },
                new Experience { Id = 3, Name = "Example Experience #3", Timeframe = "Sep 2024 - TBD", Description = "Example Experience Description" },
            };

            // Return the list of products
            return Ok(products);
        }
    }
}