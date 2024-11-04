import { Request, Response, NextFunction } from 'express';
import { API_KEY, VALID_TOKEN } from '../config/constants';

export const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header('x-api-key');
  
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  
  next();
};

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.params;
  
  if (token !== VALID_TOKEN) {
    return res.status(404).json({ error: 'Invalid token' });
  }
  
  next();
};