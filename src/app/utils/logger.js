import pino from 'pino';

// Config for "pretty" printing in dev mode (easier to read)
// but standard JSON in production (easier for machines to parse)
const edgeConfig = {
    browser: {
        asObject: true
    }
};

const config = {
    level: process.env.LOG_LEVEL || 'info', // 'debug', 'info', 'warn', 'error'
    timestamp: pino.stdTimeFunctions.isoTime,
    ...(process.env.NODE_ENV === 'development' && {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                ignore: 'pid,hostname', // Clean up the log output
                translateTime: 'SYS:standard',
            },
        },
    }),
};

export const logger = pino(config);