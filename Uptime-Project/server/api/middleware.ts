import { verifyToken } from "@clerk/backend";
import type { NextFunction, Request, Response } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    // If the token doesn't exist then user is unauthorized 
    if (!authHeader) {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;

    // Verify the Clerk token
    verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY || "sk_test_E1UwWYZRPpcid2Cr3fhVoDH4XIWIZPxwYdKHjiznYX",
    })
        .then(decoded => {
            // Add decoded token to request for use in subsequent middleware/routes
            req.userId = decoded.sub as string;
            next(); // If decoded exists only then go to next route else stop
        })
        .catch(error => {
            console.error('Token verification error:', error);
            return res.status(403).json({ error: 'Invalid token' });
        });
}

