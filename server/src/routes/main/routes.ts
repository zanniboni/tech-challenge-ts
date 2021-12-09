//Instanciado express para criação de routers / rotas
const express = require("express")
const Router = express.Router()

/* Configurações das rotas */
import { graphqlHTTP } from "express-graphql";
import { schema } from "../../Services/GraphQL/schema/schema"
const AWSRoute = require('../aws/awsRoute')

Router.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

Router.use('/aws', AWSRoute)

export = Router
