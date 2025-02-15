using backend.Data;
using backend.Models;

using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext dapper;

        public UserController(IConfiguration config)
        {
            dapper = new DataContext(config);
        }

        [HttpGet("test")]
        public string TestConnection()
        {
            return dapper.LoadDataSingle<string>("SELECT GETDATE()");
        }

        [HttpGet("getUsers")]
        public IEnumerable<User> GetUsers()
        {
            string sql = @"SELECT * FROM StudentHub.Users";
            return dapper.LoadData<User>(sql);
        }

        [HttpPost("addUser")]
        public bool AddUser(User user)
        {
            string sql = @"INSERT INTO StudentHub.Users (FirstName, LastName, Profile, Description, Email, Address, Physics, Chemistry, Maths, CreatedAt, UpdatedAt) VALUES (@FirstName, @LastName, @Profile, @Description, @Email, @Address, @Physics, @Chemistry, @Maths, @CreatedAt, @UpdatedAt)";
            return dapper.StoreData(sql, user);
        }

        [HttpPut("updateUser")]
        public bool UpdateUser(User user)
        {
            string sql = @"UPDATE StudentHub.Users SET FirstName = @FirstName, LastName = @LastName, Profile = @Profile, Description = @Description, Email = @Email, Address = @Address, Physics = @Physics, Chemistry = @Chemistry, Maths = @Maths, UpdatedAt = @UpdatedAt WHERE StudentId = @StudentId";
            return dapper.StoreData(sql, user);
        }

        [HttpDelete("deleteUser/{studentId:int}")]
        public bool DeleteUser(int studentId)
        {
            string sql = @"DELETE FROM StudentHub.Users WHERE StudentId = @StudentId";
            return dapper.StoreData(sql, new { StudentId = studentId });
        }

    }
}
