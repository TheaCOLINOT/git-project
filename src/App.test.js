import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import nécessaire
import App from "./App";

test("renders welcome message", () => {
    render(<App />);
    const heading = screen.getByText(/welcome to my app/i);
    expect(heading).toBeInTheDocument();
});
