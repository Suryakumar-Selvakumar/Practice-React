import { expect, it, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GroupForm from "../src/components/parent-component";
import { act } from "react";

let mockUser;
let mockIndex;

vi.mock("../src/components/child-component", () => ({
  default: ({ onAdd, onDelete, onEdit, users }) => (
    <div>
      <button onClick={() => onAdd(mockUser)} data-testid="addUser">
        Add
      </button>
      <button
        onClick={() => onDelete(mockIndex, mockUser)}
        data-testid="deleteUser"
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(mockIndex, mockUser)}
        data-testid="editUser"
      >
        Edit
      </button>
      <span data-testid="users">{JSON.stringify(users)}</span>
    </div>
  ),
}));

const assertUsers = (expectedUsers) => {
  const usersSpan = screen.getByTestId("users");
  const usersText = usersSpan.innerHTML;
  const actualUsers = JSON.parse(usersText);
  expect(expectedUsers).toEqual(actualUsers);
};

describe("GroupForm", () => {
  it("correctly handles adding a user", async () => {
    mockUser = {
      name: "test add user",
      address: "test add user",
    };

    render(<GroupForm />);

    const addUserButton = screen.getByTestId("addUser");
    await act(async () => {
      await userEvent.click(addUserButton);
    });

    assertUsers([mockUser]);
  });

  it("correctly handles deleting a user", async () => {
    mockIndex = 1;
    const initialUsers = [
      {
        name: "1",
        address: "1",
      },
      {
        name: "2",
        address: "2",
      },
      {
        name: "3",
        address: "3",
      },
    ];

    render(<GroupForm initialUsers={initialUsers} />);

    const deleteUserButton = screen.getByTestId("deleteUser");
    await act(async () => {
      await userEvent.click(deleteUserButton);
    });

    const expectedUsers = [initialUsers[0], initialUsers[2]];
    assertUsers(expectedUsers);
  });

  it("correctly handles editing a user", async () => {
    mockIndex = 0;
    const initialUsers = [
      {
        name: "initial",
        address: "initial",
      },
    ];
    mockUser = {
      name: "edited",
      address: "edited",
    };

    render(<GroupForm initialUsers={initialUsers} />);

    const editUserButton = screen.getByTestId("editUser");

    await act(async () => {
      await userEvent.click(editUserButton);
    });

    assertUsers([mockUser]);
  });
});
