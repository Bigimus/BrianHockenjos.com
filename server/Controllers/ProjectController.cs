using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase {

        [HttpGet]
        public ActionResult<List<Project>> GetProducts()
        {
            // Create a list of products
            var products = new List<Project>
            {
                new Project { Id = 1, Name = "Example Project #1", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 2, Name = "Example Project #2", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 3, Name = "Example Project #3", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 4, Name = "Example Project #4", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 5, Name = "Example Project #5", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 6, Name = "Example Project #6", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 7, Name = "Example Project #7", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
                new Project { Id = 8, Name = "Example Project #8", Timeframe = "Sep 2024 - TBD", Description = "Example Project Description" },
            };

            // Return the list of products
            return Ok(products);
        }
    }
}