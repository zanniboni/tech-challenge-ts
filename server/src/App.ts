import express from "express"; 
import { Application } from 'express';

import { graphqlHTTP } from "express-graphql";
import {schema} from "./schema/schema"
import cors from "cors";

const app: Application = express()

/* Habilitar cross-origin requests */
app.use(cors());

app.use(  
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening port " + PORT);
});
