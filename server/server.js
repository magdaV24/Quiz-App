import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import authRoute from './routes/auth.js'

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

const PORT = process.env.PORT || 5000;

app.use(
  session({
    name: "user",
    secret: "subscribe",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 60 * 60 * 24,
    },
  })
);

app.use("/server/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
