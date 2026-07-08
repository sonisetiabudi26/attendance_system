export default () => ({
    app: {
        name: process.env.APP_NAME,
        env: process.env.NODE_ENV,
        port: Number(process.env.PORT),
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    },

    database: {
        url: process.env.DATABASE_URL,
    },

    rabbitmq: {
        uri: process.env.RABBITMQ_URI,
    },

    grpc: {
        auth: process.env.GRPC_AUTH_URL,
        employee: process.env.GRPC_EMPLOYEE_URL,
        attendance: process.env.GRPC_ATTENDANCE_URL,
        notification: process.env.GRPC_NOTIFICATION_URL,
    },
});