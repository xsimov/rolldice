import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
import { Die } from "./Die";

describe("Die", () => {
  let previousMathRandomFn;

  beforeAll(() => {
    previousMathRandomFn = Math.random;
  });
  afterAll(() => {
    Math.random = previousMathRandomFn;
  });

  afterEach(() => {
    Math.random.mockClear();
  });

  it("uses a random value up to the number of faces", async () => {
    Math.random = jest.fn().mockReturnValue(0, 0.3, 0.6, 0.9);
    const faces = 4;
    const { getByText, getByTestId } = render(<Die faces={faces} />);
    const testId = `${faces}-faces-die`;

    const expectFaceNumber = async (face) => {
      waitFor(() => expect(getByText(`${face}`)).toBeInTheDocument());
      act(() => {
        fireEvent.click(getByTestId(testId));
      });
      expect(getByText("?")).toBeInTheDocument();
    };

    await expectFaceNumber(1);
    await expectFaceNumber(2);
    await expectFaceNumber(3);
    await expectFaceNumber(4);
  });
});
