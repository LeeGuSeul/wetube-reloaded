import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger); // global middleware

const handleListening = () =>
  console.log(`✨Server Lostentin on port ${PORT}✨`); 

app.listen(PORT, handleListening);
