export const config = {
    database: {
        dialect: process.env.DB_CONNECTION || 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: false,
    },
    jwtPrivateKey: process.env.SECRET_KEY,
};
