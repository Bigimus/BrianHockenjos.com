using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienceController : ControllerBase {
        [HttpGet]
        public ActionResult<List<Experience>> GetExperience()
        {
            var experiences = new List<Experience>
            {
                new Experience { 
                    Id = 1, 
                    Company = "Northwell at Jones Beach Theather - Livenation", 
                    Position = "Housekeeping Manager",
                    Timeframe = "Jun 2023 - Current", 
                    Descriptions = new List<Description> {
                        new Description {Id = 1, info = "Managed and mentored a team of 65+ housekeeping staff"},
                        new Description {Id = 2, info = "Recruited, trained, and scheduled employees to ensure adequate coverage and productivity."},
                        new Description {Id = 3, info = "Fostered a culture of teamwork, accountability, and continuous improvement."}
                    }
                },
                new Experience { 
                    Id = 2, 
                    Company = "Northwell at Jones Beach Theather - Livenation", 
                    Position = "Operations",
                    Timeframe = "Apr 2018 - Jun 2023", 
                    Descriptions = new List<Description> {
                        new Description {Id = 1, info = "Ensured the functionality of equipment around the venue."},
                    }                
                }
            };
            return Ok(experiences);
        }
    }
}