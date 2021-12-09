import express from "express";
import { Application } from 'express';
import cors from "cors";
import routes from './routes/main/routes'

const app: Application = express()

/* Habilitar cross-origin requests */
app.use(cors());

app.use(express.json());
app.use(routes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening port " + PORT);
});