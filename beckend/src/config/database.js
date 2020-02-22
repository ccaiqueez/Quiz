module.exports = {
    host: '127.0.0.1',
    port: 3308,
    database: 'quizup',
    username: 'root',
    password: '12345',
    dialect: 'mariadb',
    
    define: {
        freezeTableName: true,
        timezone: '-03:00',
        underscore: false
    }
}