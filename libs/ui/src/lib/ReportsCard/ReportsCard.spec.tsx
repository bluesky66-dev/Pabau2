import React from "react";
import { render } from "@testing-library/react";

import { ReportsCard } from "./ReportsCard";

describe("ReportsCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ReportsCard />);
    expect(baseElement).toBeTruthy();
  });
});
