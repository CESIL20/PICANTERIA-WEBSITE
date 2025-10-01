import express from "express";
import path from "path";

const app = express();
const __dirname = process.cwd();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
