# NodeRateGuard

NodeRateGuard is a simple, memory-based rate limiting middleware for Node.js applications. It's designed to protect your Node.js and Express.js applications from excessive and potentially harmful traffic by limiting the number of requests a client can make in a given time frame.

## Features

- Easy to integrate with Express.js applications.
- Memory-based rate limiting, no external dependencies required.
- Configurable rate limits and time windows.
- Helps protect against brute-force attacks, DDoS attacks, and other forms of excessive request rates.

## Installation

Install NodeRateGuard via npm:

```npm install node-rate-guard```


## Usage

To use NodeRateGuard, import it into your Express.js application and apply it as middleware. You can apply it globally or to specific routes.

### Basic Usage

Here's how to set up NodeRateGuard with default settings for a simple Express.js application:

```javascript
const express = require('express');
const rateLimiter = require('node-rate-guard');

const app = express();

// Apply the rate limiter middleware
app.use(rateLimiter({
    limit: 100, // Maximum number of requests per IP within the windowMs period
    windowMs: 15 * 60 * 1000 // Time window in milliseconds (here, 15 minutes)
}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
```

### Configuration Options

- `limit`: The maximum number of requests allowed per IP within the `windowMs` timeframe. Default is 100.
- `windowMs`: The time frame for checking the request count in milliseconds. Default is 900000 ms (15 minutes).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/BekzodbekTurgunov/node-rate-guard/issues).

## Support

If you have any questions or issues, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/BekzodbekTurgunov/node-rate-guard) file for details.

# node-rate-guard
