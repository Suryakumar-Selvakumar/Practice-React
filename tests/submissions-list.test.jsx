import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectSubmissionContext from "../src/components/ProjectSubmissionContext.js";
import SubmissionsList from "../src/components/submissions-list";
import { describe, expect, it, vi } from "vitest";

// eslint-disable-next-line react/display-name
vi.mock("react-flip-move", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

vi.mock("./submission", () => ({
  default: ({ submission, isDashboardView }) => (
    <>
      <div data-test-id="submission">{submission.id}</div>
      <div data-test-id="dashboard">{isDashboardView.toString()}</div>
    </>
  ),
}));

// setup props
const submissions = [
  { id: "foo", likes: 3 },
  { id: "bar", likes: 2 },
  { id: "baz", likes: 1 },
];
const userSubmission = { id: "foobar" };
const handleDelete = vi.fn();
const onFlag = vi.fn();
const handleUpdate = vi.fn();
const handleLikeToggle = vi.fn();

describe("submissions list", () => {
  describe("submissions", () => {
    it("renders the submissions array in order of likes", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={submissions}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(screen.queryAllByTestId("submission").length).toBe(3);
      expect(screen.queryAllByTestId("submission")[0].textContent).toBe("foo");
      expect(screen.queryAllByTestId("submission")[1].textContent).toBe("bar");
      expect(screen.queryAllByTestId("submission")[2].textContent).toBe("baz");
    });

    it("does not render any submissions any submissions when array is empty and user submission not provided, and instead renders a no submissions message", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={[]}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(screen.queryAllByTestId("submission").length).toBe(0);
      expect(
        screen.getByText("No Submissions yet, be the first!")
      ).toBeInTheDocument();
    });
  });

  describe("user submission", () => {
    it("renders a user submission when provided", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={submissions}
            userSubmission={userSubmission}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(screen.queryAllByTestId("submission").length).toBe(4);
      expect(screen.getByText("foobar")).toBeInTheDocument();
    });

    it("does not render a user submission when not provided", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={submissions}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(screen.queryAllByTestId("submission").length.toBe(3));
      expect(screen.queryByText("foobar")).not.toBeInTheDocument();
    });

    it("does not render 'no submissions' message when array is empty but user submission is provided", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={[]}
            userSubmission={userSubmission}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(screen.getByText("foobar")).toBeInTheDocument();
      expect(
        screen.queryByText("No Submissions yet, be the first!")
      ).not.toBeInTheDocument();
    });
  });

  describe("context", () => {
    it("renders view more section if allSubmissionsPath is provided in context", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "#" }}>
          <SubmissionsList
            submissions={submissions}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
            onFlag={onFlag}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(
        screen.queryByTestId("view-all-projects-link")
      ).toBeInTheDocument();
    });

    it("does not render view more section if allSubmissionsPath is not provided in context", () => {
      render(
        <ProjectSubmissionContext.Provider value={{ allSubmissionsPath: "" }}>
          <SubmissionsList
            submissions={submissions}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleLikeToggle={handleLikeToggle}
            onFlag={onFlag}
          />
        </ProjectSubmissionContext.Provider>
      );

      expect(
        screen.queryByTestId("view-all-project-link")
      ).not.toBeInTheDocument();
    });
  });
});
