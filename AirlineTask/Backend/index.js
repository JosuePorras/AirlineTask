import app from "./app.js";
import { PORT } from "./config.js";
// import db from "./db.js";

async function main() {
  try {
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);

  } 
}

main();