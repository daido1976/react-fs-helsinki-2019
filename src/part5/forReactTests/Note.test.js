import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Note } from "./Note";

afterEach(cleanup);

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true
  };

  const component = render(<Note note={note} />);

  expect(component.container).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );
});
