import { render, screen } from "@testing-library/react";
import { BrowserRouter, createMemoryRouter } from "react-router-dom";

import NotFound from "../../src/components/NotFound";

describe("NotFound", () => {
  xit("should render the component and match snapshot", async () => {
    render(<NotFound />, {wrapper: BrowserRouter});
    const element = await screen.findByTestId("not-found");
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  xit("Should log error message when rendered", async () => {
    const FAKE_EVENT = { name: "test event" };
    const routes = [
      {
        path: "*",
        element: <NotFound />,
        loader: () => FAKE_EVENT
      }
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/123"],
      initialIndex: 0
    });
    render(<NotFound router={router} />, {wrapper: BrowserRouter});
    const element = await screen.findByTestId("not-found");
    expect(element).toBeDefined();

  })
});