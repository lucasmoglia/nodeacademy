const {createLogger, format, transports} = require('winston');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

/**
 * Custom for logging nodejs exception messages
 * @param info NodeJS Exception Message Object
 * @author Lucas Moglia
 */
const enumerateErrorFormat = format((info) => {
  if (info.message instanceof Error) {
    info.message = Object.assign({
      message: info.message.message,
      stack: info.message.stack,
    }, info.message);
  }

  if (info instanceof Error) {
    return Object.assign({
      message: info.message,
      stack: info.stack,
    }, info);
  }

  return info;
});


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, 'results.log');

const logger = createLogger({
  level: env === 'production' ? 'info' : 'debug',
  format: format.combine(
    enumerateErrorFormat(),
    format.label({label: path.basename(process.mainModule.filename)}),
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'})
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        enumerateErrorFormat(),
        format.colorize(),
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
      handleExceptions: true,
    }),
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
