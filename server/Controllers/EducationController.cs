using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class EducationController : ControllerBase {
        [HttpGet]
        public ActionResult<List<Education>> GetEducation()
        {
            var degrees = new List<Education>
            {
                new Education { 
                    Id = 1, 
                    School = "Stanford H. Calhoun High School", 
                    Location = "Merrick, NY",
                    Timeframe = "Sep 2014 - Jun 2018", 
                    Degree = "Advanced Regents Dipoloma",
                    Link = "https://www.bellmore-merrick.k12.ny.us/schools/sanford_h_calhoun_high_school"
                },
                new Education { 
                    Id = 2, 
                    School = "New York Institute of Technology", 
                    Location = "Old Westbury, NY",
                    Timeframe = "Sep 2018 - May 2022", 
                    Degree = "Electrical and Computer Engineering B.S",
                    Link = "https://www.nyit.edu/"
                }
            };
            return Ok(degrees);
        }
    }
}