using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase {

        [HttpGet]
        public ActionResult<List<Project>> GetProjects()
        {
            // Create a list of products
            var projects = new List<Project>
            {
                new Project { 
                    Id = 1, 
                    Name = "Weight Tracker App", 
                    Timeframe = "Dec 2022 - Jan 2023", 
                    Link = "https://github.com/Bigimus/Weight-Tracker",
                    Description = "Developed a UI with Tkinter, which a user can either create a new account, or log into an existing one. Upon logging in the user can view their data, change their data, or delete their account all together." 
                },
                new Project { 
                    Id = 2, 
                    Name = "Password Protector", 
                    Timeframe = "Dec 2022 - Jan 2023", 
                    Link = "https://github.com/Bigimus/Password-Protector",
                    Description = "Developed a UI with the Kivy library. Upon logging in the user can create and store new accounts, search for an account based on the website/application of the account. The user can also change their accounts information or delete their account all together." 
                },
                new Project { 
                    Id = 3, 
                    Name = "Restaurant Analytics", 
                    Timeframe = "Sep 2020 - Dec 2020", 
                    Link = "https://github.com/Bigimus/Restaurant-Analytics",
                    Description = "Created a system using linked lists and binary trees that took inputted menu items (beverages, appetizers, entrees, desserts), their corresponding prices, and the amount of each item that sold for that ‘shift’ and then calculated the profitability of each product." 
                },
                new Project { 
                    Id = 4, 
                    Name = "Porky The Autonomous Lawnmower", 
                    Timeframe = "Sep 2020 - May 2020", 
                    Link = "https://github.com/Bigimus/Porky-The-Autonomous-Lawn-Mower",
                    Description = "Developed and designed an autonomous lawn mower using machine learning algorithms and the engineering design process. Acted as the team leader for three of my fellow colleagues. " 
                },
                new Project { 
                    Id = 5, 
                    Name = "BizBash API", 
                    Timeframe = "Jan 2023 - Feb 2023", 
                    Link = "https://github.com/Bigimus/BizBashAPI",
                    Description = "Developed a software to interface with https://www.bizbash.com/venue-directory and pull data from its source code. The API can be used to retrieve all the venues, or search by a market and or a venue type. NOTE, this API is not official and follows the guidelines of the website." 
                },
                new Project { 
                    Id = 6, 
                    Name = "Pokemon Twitter Bot", 
                    Timeframe = "Jan 2023 - Feb 2023", 
                    Link = "https://github.com/Bigimus/Pokemon-Twitter-Bot",
                    Description = "Using Tweepy to interface with the Twitter API, a bot posts a random tweet. This tweet contains an image of a random Pokémon, their species, type, etc. The data for the tweet is fetched using PokeAPI." 
                },
                new Project { 
                    Id = 7, 
                    Name = "BrianHockenjos.com", 
                    Timeframe = "Jan 2024 - Active", 
                    Description = "Using React.JS and ASP.Net, I designed and coded this website from scratch." 
                },
            };

            return Ok(projects);
        }
    }
}