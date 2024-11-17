import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.use((req, res) => {
    res.status(404).send({ statusCode: 404, error: "Not found", message: `Cannot ${req.method} ${req.originalUrl}` })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
