import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jenkins!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

export default app;
