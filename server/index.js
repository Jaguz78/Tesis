import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import documentoRoutes from './routes/documento.routes.js';

const app = express();

app.use(indexRoutes);
app.use(documentoRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
