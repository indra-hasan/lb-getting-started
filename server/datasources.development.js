module.exports = {
  "mysql-lb": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "url": "",
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "name": "mysql-lb",
    "user": process.env.DB_USER,
    "connector": process.env.DB_CONNECTOR
  }

}