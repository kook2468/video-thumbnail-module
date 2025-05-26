/// <reference types="vitest" />
import "@testing-library/jest-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare global {
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Assertion<T = any> extends jest.Matchers<void, T> {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface AsymmetricMatchersContaining
      extends jest.AsymmetricMatchersContaining {}
  }
}
