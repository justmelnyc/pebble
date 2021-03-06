import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved
} from "@testing-library/react";
import Tooltip from "../Tooltip";

describe("Tooltip", () => {
  test("should show & hide tooltip", async () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <Tooltip
        text="Tip Contents"
        label={labelProps => <div {...labelProps}>Hover on Me!</div>}
      />
    );

    fireEvent.mouseEnter(getByText("Hover on Me!"));
    jest.runAllTimers();
    await waitForElement(() => getByText("Tip Contents"));

    fireEvent.mouseLeave(getByText("Hover on Me!"));
    jest.runAllTimers();
    await waitForElementToBeRemoved(() => getByText("Tip Contents"));
  });

  test("should not show & hide a disabled tooltip", async () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <Tooltip
        disabled
        text="Tip Contents"
        label={labelProps => <div {...labelProps}>Hover on Me!</div>}
      />
    );

    fireEvent.mouseEnter(getByText("Hover on Me!"));
    try {
      jest.runAllTimers();
    } catch (e) {
      // This throws that jest ran 10000 timers but thinks there is an infinite loop.
    }

    let notFound = false;
    try {
      await waitForElement(() => getByText("Tip Contents"));
    } catch (e) {
      notFound = true;
    }
    expect(notFound).toBeTruthy();
  });
});
