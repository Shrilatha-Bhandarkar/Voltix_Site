declare module 'express';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    userId: string;
  }
}