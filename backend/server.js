import express from "express";
import cors from "cors";
import router from "./router/postRouter.js";
const port = process.env.PORT ?? 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log(`server running on ${port}`));
