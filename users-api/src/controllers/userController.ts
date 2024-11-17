import { Request, Response } from 'express';
import { userServices } from '../services/userServices';

const userController = {
    registerUser: (req: Request, res: Response): void => {
        try {
            const newUser = userServices.registerUser(req.body)
            res.status(201).json(newUser);
        } catch (e) {
            if (e instanceof Error)
                res.status(400).json({ message: e.message });
        }
    },

    getUserProfile: (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            const user = userServices.getUserProfile(id);
            res.status(200).json(user);
        } catch (e) {
            if (e instanceof Error)
                res.status(404).json({ message: e.message });
        }
    },

    updateUserProfile: (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            // const { username, email, password } = req.body;
            const updatedUser = userServices.updateUserProfile(id, req.body)
            res.status(200).json(updatedUser);
        } catch (e) {
            if (e instanceof Error)
                res.status(404).json({ message: e.message });
        }
    },

    deleteUser: (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            userServices.deleteUser(id);
            res.status(204).send();
        } catch (e) {
            if (e instanceof Error)
                res.status(404).json({ message: e.message });
        }
    }
}

export { userController }