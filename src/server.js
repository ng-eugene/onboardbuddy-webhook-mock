const express = require("express");
const { listWidgets, createWidget } = require("./widgets");

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/widgets", async (_req, res) => {
  res.json(await listWidgets());
});

app.post("/widgets", async (req, res) => {
  const widget = await createWidget(req.body);
  res.status(201).json(widget);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`mock app listening on ${port}`));

module.exports = app;
