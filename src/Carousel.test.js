import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

let cardData = [
  {
    src: "image1",
    caption: "Photo by Richard Pasquarella on Unsplash"
  },
  {
    src: "image2",
    caption: "Photo by Pratik Patel on Unsplash"
  },
  {
    src: "image3",
    caption: "Photo by Josh Post on Unsplash"
  }
]

let title = "Shells from far away beaches."

it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('fas fa-chevron-circle-left fa-2x')
  ).not.toBeInTheDocument();


  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move to the last image
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(
    container.querySelector('fas fa-chevron-circle-right fa-2x')
  ).not.toBeInTheDocument();

});

it("renders without crashing", function() {
  render(<Carousel cardData={cardData} title={title}/>)
})

it("matches snapshot", function() {
  const { container } = render(<Carousel cardData={cardData} title={title}/>)
  expect(container).toMatchSnapshot();
})

