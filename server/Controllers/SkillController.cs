using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase {
        [HttpGet]
        public ActionResult<List<Skill>> GetProducts()
        {
            // Create a list of products
            var Skills = new List<Skill>
            {
                new Skill { 
                    Id = 1, 
                    Language = "Python", 
                    Libraries = new List<Library> {
                        new Library {Id = 1, Name = "Kivy"},
                        new Library {Id = 2, Name = "Tkinter"},
                        new Library {Id = 3, Name = "Numpy"},
                        new Library {Id = 4, Name = "Pandas"}   
                    }
                },
                new Skill { 
                    Id = 2, 
                    Language = "JavaScript",
                    Libraries = new List<Library> {
                        new Library {Id = 1, Name = "React"},
                        new Library {Id = 2, Name = "MUI"}
                    }
                },
                new Skill { 
                    Id = 3, 
                    Language = "Java", 
                    Libraries = new List<Library> {
                        new Library {Id = 1, Name = "Maven"}
                    } 
                },
            };
            return Ok(Skills);
        }
    }
}