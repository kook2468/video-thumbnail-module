// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi, beforeEach } from "vitest";
// import { FormStep } from "./FormStep";
// import { usePostDraftStore } from "../../../../../stores/postDraft.store";
// import { POST_CONTENT_MIN_LENGTH } from "../../../constants/limit";

// // 모달 스텝 상태 변경 함수 mocking
// vi.mock("@/shared/hooks/usePostModal", () => ({
//   usePostModal: () => ({
//     setStep: vi.fn(),
//   }),
// }));

// describe("FormStep", () => {
//   beforeEach(() => {
//     // 상태 초기화
//     usePostDraftStore.getState().reset();
//   });

//   it("10자 미만 입력 시 토스트 메시지가 뜬다", () => {
//     render(<FormStep />);

//     const input = screen.getByRole("textbox");
//     fireEvent.change(input, { target: { value: "짧음" } });

//     const button = screen.getByText("다음");
//     fireEvent.click(button);

//     expect(screen.getByText("내용은 최소 10자 이상 입력해주세요")).toBeInTheDocument();
//   });

//   it("유효한 글 입력 시 다음 스텝으로 전환된다", () => {
//     const mockSetStep = vi.fn();

//     // 모킹 다시 override
//     vi.mocked(require("@/shared/hooks/usePostModal").usePostModal).mockReturnValue({
//       setStep: mockSetStep,
//     });

//     render(<FormStep />);

//     const input = screen.getByRole("textbox");
//     const validContent = "a".repeat(POST_CONTENT_MIN_LENGTH);
//     fireEvent.change(input, { target: { value: validContent } });

//     const button = screen.getByText("다음");
//     fireEvent.click(button);

//     expect(mockSetStep).toHaveBeenCalled(); // 다음 step 전환
//   });
// });
