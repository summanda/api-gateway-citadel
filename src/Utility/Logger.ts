import winston from 'winston';

const Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: './AppLogs/Logger/error.log', level: 'error' }),
        new winston.transports.File({ filename: './AppLogs/Logger/combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    Logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export { Logger };