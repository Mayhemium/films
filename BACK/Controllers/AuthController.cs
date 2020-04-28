using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ASTOBA_BACK.Models;
using ASTOBA_BACK.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace ASTOBA_BACK.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public AuthController(IConfiguration configuration, SignInManager<User> signInManager, UserManager<User> userManager)
        {
            Configuration = configuration;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }

        public UserManager<User> userManager { get; }
        public SignInManager<User> signInManager { get; }
        public IConfiguration Configuration { get; }

        [Authorize]
        [HttpGet("data")]
        public string GetData()
        {
            return "asd";
        }

        [HttpPost]
        [Route("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromForm] RegisterModel registerModel)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    UserName = registerModel.Username,
                    FirstName = registerModel.FirstName,
                    LastName = registerModel.LastName,
                    Email = registerModel.Email
                };

                var identityResult = await userManager.CreateAsync(user, registerModel.Password);
                if (identityResult.Succeeded)
                {
                    await signInManager.SignInAsync(user, isPersistent: false);
                    //return Ok(GetToken(user));
                    return Ok();
                }
                else
                {
                    return BadRequest(identityResult.Errors);
                }
            }
            return BadRequest(ModelState);
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromForm] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                var loginResult = await signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, isPersistent: false, lockoutOnFailure: false);

                if (!loginResult.Succeeded)
                {
                    return BadRequest();
                }

                //var user = await userManager.FindByNameAsync(loginModel.Username);

                //return Ok(GetToken(user));
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [Authorize]
        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }



        //[Authorize]
        //[HttpPost]
        //[Route("refreshtoken")]
        //public async Task<IActionResult> RefreshToken()
        //{
        //    var user = await userManager.FindByNameAsync(
        //        User.Identity.Name ??
        //        User.Claims.Where(c => c.Properties.ContainsKey("unique_name")).Select(c => c.Value).FirstOrDefault()
        //        );
        //    return Ok(GetToken(user));

        //}
        //private string GetToken(User user)
        //{
        //    var utcNow = DateTime.UtcNow;

        //    var claims = new Claim[]
        //    {
        //                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
        //                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
        //                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        //                new Claim(JwtRegisteredClaimNames.Iat, utcNow.ToString())
        //    };

        //    var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetValue<string>("Tokens:Key")));
        //    var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
        //    var jwt = new JwtSecurityToken(
        //        signingCredentials: signingCredentials,
        //        claims: claims,
        //        notBefore: utcNow,
        //        expires: utcNow.AddSeconds(Configuration.GetValue<int>("Tokens:Lifetime")),
        //        audience: Configuration.GetValue<string>("Tokens:Audience"),
        //        issuer: Configuration.GetValue<string>("Tokens:Issuer")
        //        );

        //    return new JwtSecurityTokenHandler().WriteToken(jwt);

        //}
    }
}