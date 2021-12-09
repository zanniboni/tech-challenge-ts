//Instanciado express para criação de routers / rotas
const express = require("express")
const Router = express.Router()
import { Request, Response } from 'express';

/* Importando bibliotecas */
const aws = require("aws-sdk");
const config = require("./config.json");
var path = require("path");
var fs = require("fs");

Router.get('/refresh', (req: Request, res: Response) => {
    async function readAws() {
        try {
            aws.config.setPromisesDependency();

            aws.config.update({
                accessKeyId: config.aws.accessKeyId,
                secretAccessKey: config.aws.secretAccessKey,
                region: config.aws.region,
            });

            const s3 = new aws.S3();
            var params = {
                Bucket: "zanni-bucket",
                Key: "songData.json",
            };

            let readStream = s3.getObject(params).createReadStream();
            let writeStream = fs.createWriteStream(path.join(__dirname, "s3data.json"));
            readStream.pipe(writeStream);

        } catch (e) {

            console.log("Erro: ", e);

        }
    }
    readAws().then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.log(e)
        res.sendStatus(500);
    })

})

export = Router