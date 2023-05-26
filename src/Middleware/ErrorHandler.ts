import { Request, Response, NextFunction } from "express";

const ErrorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) return next(error);
    res.status(500).send(error.message);
}

export default ErrorHandler;