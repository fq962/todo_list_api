import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, colorize, printf } = format;

export class APILogger {
  public static formato = printf((info) => {
    return `[${info.timestamp}] [${info.label}] ${info.level}: ${info.message}`;
  });

  public static logger = createLogger({
    level: 'info',
    format: combine(
      // colorize({ all: true }),
      label({ label: 'API RUTEROS GPS' }),
      timestamp(),
      APILogger.formato,
    ),

    transports: [
      new transports.Console({
        format: combine(colorize({ all: true })),
      }),
      new transports.File({ filename: 'log_error.log', level: 'error' }),
      //new transports.File({ filename: 'log_api.log' }),
    ],
  });
}

// eslint-disable-next-line prefer-const
export let logFuncion = () => {
  APILogger.logger.info(
    `[${logFuncion.caller.name}] [${JSON.stringify(
      Array.from(logFuncion.caller.arguments),
    )}]`,
  );
};

// eslint-disable-next-line prefer-const
export let logError = (error: Error) => {
  APILogger.logger.error(
    `[${logError.caller.name}] (${JSON.stringify(
      Array.from(logError.caller.arguments),
    )})`,
    error,
  );
};
