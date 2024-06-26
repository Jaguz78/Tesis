import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import dotenv from "dotenv";
dotenv.config();

import indexRoutes from "./routes/index.routes.js";
import documentoRoutes from "./routes/documento.routes.js";
import loginRoutes from "./routes/login.routes.js";
import estudianteRoutes from "./routes/estudiantes.routes.js";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(indexRoutes);
app.use(documentoRoutes);
app.use(loginRoutes);
app.use(estudianteRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
