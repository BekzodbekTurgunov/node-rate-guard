# NodeRateGuard

node-rate-guard is a simple, memory-based rate limiting middleware for Node.js applications. It's designed to protect your Node.js and Express.js applications from excessive and potentially harmful traffic by limiting the number of requests a client can make in a given time frame.

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

Here's how to set up node-rate-guard with default settings for a simple Express.js application:

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

### NestJS

In NestJS, wrap the middleware in a class that implements `NestMiddleware`.

**Create a Middleware Wrapper**

```typescript
// rateLimiter.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const rateLimiter = require('node-rate-guard');

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        return rateLimiter({ limit: 100, windowMs: 15 * 60 * 1000 })(req, res, next);
    }
}
```
**Apply Middleware in a NestJS Module**

In your NestJS module (e.g., `app.module.ts`), apply the middleware using the `configure` method of the module class. Here's an example:

```typescript
// app.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { RateLimiterMiddleware } from './rateLimiter.middleware';

@Module({
  // ... other module settings
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimiterMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
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
