// index.js

/**
 * A rate limiting middleware for Express.js applications.
 *
 * @param {Object} options - Configuration options for the rate limiter
 * @param {number} options.limit - Maximum number of requests allowed per windowMs
 * @param {number} options.windowMs - Time frame for rate limiting in milliseconds
 * @returns {Function} Middleware function for Express.js
 */
const rateLimiter = ({ limit, windowMs }) => {
    const requests = {};

    return (req, res, next) => {
        const ip = req.ip;
        const currentTime = Date.now();

        if (!requests[ip] || currentTime - requests[ip].startTime > windowMs) {
            requests[ip] = { count: 1, startTime: currentTime };
        } else if (requests[ip].count >= limit) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        } else {
            requests[ip].count++;
        }

        next();
    };
};

module.exports = rateLimiter;
