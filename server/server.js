import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import db from "./config/db.js";
import bodyParser from "body-parser";

const app = express();

app.use(json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
