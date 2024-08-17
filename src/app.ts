import express, { NextFunction, Request, Response } from "express";
import { db } from "./db";
import { countries } from "./schema";

const app = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const a = await db
    .insert(countries)
    .values([
      {
        name: "Shahadat Type abc",
      },
      {
        name: "Rafiquls Islam "
      }
    ])
    .returning({
      id: countries.id,
      name: countries.name,
    });

  console.log(a);

  res.json({
    a,
  });
});

export default app;
