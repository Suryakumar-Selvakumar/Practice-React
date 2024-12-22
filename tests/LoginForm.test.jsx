import { createRoutesStub } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../src/components/LoginForm";
import { test } from "vitest";

test("LoginForm renders error messages", async () => {
  const USER_MESSAGE = "Username is required";
  const PASSWORD_MESSAGE = "Password is required";

  const Stub = createRoutesStub([
    {
      path: "/login",
      Component: LoginForm,
      action() {
        return {
          errors: {
            username: USER_MESSAGE,
            password: PASSWORD_MESSAGE,
          },
        };
      },
    },
  ]);

  render(<Stub initialEntries={["/login"]} />);

  userEvent.click(screen.getByText("Login"));
  await waitFor(() => screen.findByText(USER_MESSAGE), { timeout: 10000 });
  await waitFor(() => screen.findByText(PASSWORD_MESSAGE), { timeout: 10000 });
});
