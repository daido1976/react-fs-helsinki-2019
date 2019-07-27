const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let notes = [];

// get methods
app.get("/notes", (_request, response) => {
  response.json(notes);
});

app.get("/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const note = notes.find(note => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
app.get("/favicon.ico", (_request, response) => response.status(204));

// post methods
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
};

app.post("/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
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
  response.json(note);
});

// delete methods
app.delete("/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
