const aws = require("aws-sdk");
const config = require("./config.json");
var path = require("path");
var fs = require("fs");

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
    /*     const response = await s3
      .listObjectsV2({
        Bucket: "zanni-bucket",
      })
      .promise();

    console.log(response); */
  } catch (e) {
    console.log("Erro: ", e);
  }
}

readAws();
