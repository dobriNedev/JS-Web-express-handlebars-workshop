const config = {
    production: {
        PORT: 1200
    },
    development:{
        PORT: 5001,
        DB_URI: 'mongodb://localhost:27017/cubicle'
    }
}

module.exports = config[process.env.node_env || 'development'];