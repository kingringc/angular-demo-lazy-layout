import { Request, Response } from 'express';
import { USERS } from './db-data';

export function addNewUser(req: Request, res: Response) {
    USERS.push(req.body);
    res.status(200).json({ message: 'User added successfully'});
}