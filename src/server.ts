import app from "./app";
import { client } from "./db";

let server;

const main = async () => {
  try {
    await client.connect();
    let server = app.listen(5000, () => {
      console.log(`Server Is Running Now : 5000`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
