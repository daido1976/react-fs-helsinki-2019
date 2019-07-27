const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let notes = [];

// get methods
app.get("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(note => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
app.get("/favicon.ico", (req, res) => res.status(204));

// post methods
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
};

app.post("/notes", (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: "content missing"
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId()
  };

  notes = notes.concat(note);
  res.json(note);
});

// delete methods
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);

  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
