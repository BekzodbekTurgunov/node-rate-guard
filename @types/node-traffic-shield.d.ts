declare module 'node-traffic-shield' {
    interface RateLimiterOptions {
        limit: number;
        windowMs: number;
    }

    // Define a generic Request, Response, and NextFunction type
    // These types should be compatible with the types used in Express.js and NestJS
    interface GenericRequest {
        [key: string]: any;
    }

    interface GenericResponse {
        status: (statusCode: number) => GenericResponse;
        json: (body: any) => GenericResponse;
        [key: string]: any;
    }

    type NextFunction = () => void;

    function rateLimiter(options: RateLimiterOptions): (req: GenericRequest, res: GenericResponse, next: NextFunction) => void;
    export default rateLimiter;
}
