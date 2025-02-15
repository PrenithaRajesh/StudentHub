using System.Data;
using Dapper;
using Microsoft.Data.SqlClient;

namespace backend.Data
{
    public class DataContext{
        private string _connectionString;
        public DataContext(IConfiguration configuration){
            _connectionString = configuration?.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException(nameof(configuration), "Configuration cannot be null");
        }

        public IEnumerable<T> LoadData<T>(string sql){
            IDbConnection dbConnection = new SqlConnection(_connectionString);
            return dbConnection.Query<T>(sql);
        }

        public T LoadDataSingle<T>(string sql){
            IDbConnection dbConnection = new SqlConnection(_connectionString);
            return dbConnection.QuerySingle<T>(sql);
        }

        public bool StoreData<T>(string sql, T data){
            IDbConnection dbConnection = new SqlConnection(_connectionString);
            return dbConnection.Execute(sql, data)>0;
        }

    }
}