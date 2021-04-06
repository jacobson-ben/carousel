import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card caption="Dog" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg" totalNum={3} currNum={1}/>)
})

it("matches snapshot", function() {
  const { container } = render(<Card caption="Dog" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg" totalNum={3} currNum={1}/>)
  expect(container).toMatchSnapshot();
})