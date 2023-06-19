import '@testing-library/jest-dom/extend-expect';

import { worker } from './mocks/server';

beforeAll(() => {
  worker.listen();
});

afterAll(() => {
  worker.close();
});

afterEach(() => {
  worker.resetHandlers();
});
