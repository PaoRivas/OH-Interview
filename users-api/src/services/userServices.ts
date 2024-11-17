import { UniqueUser, User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';

const users: UniqueUser[] = [];

const userServices = {
    registerUser: (user: User): UniqueUser => {
        const { username, email, password } = user;

        if (!username || !email || !password) {
            throw new Error('All fields are required');
        }
        const newUser: UniqueUser = {
            id: uuidv4(),
            username,
            email,
            password,
        };

        users.push(newUser);
        return newUser;
    },

    getUserProfile: (id: string): UniqueUser => {
        const user = users.find((u) => u.id === id);

        if (!user) {
            throw new Error('User not found');
        }

        return user
    },

    updateUserProfile: (id: string, user: User): UniqueUser => {
        const { username, email, password } = user;

        const userIndex = users.findIndex((u) => u.id === id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const updatedUser: UniqueUser = {
            ...users[userIndex],
            username: username || users[userIndex].username,
            email: email || users[userIndex].email,
            password: password || users[userIndex].password,
        };

        users[userIndex] = updatedUser;
        return updatedUser
    },

    deleteUser: (id: string): void => {
        const userIndex = users.findIndex((u) => u.id === id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        users.splice(userIndex, 1);


    }

}

export { userServices }