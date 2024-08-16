import { setupWorker } from 'msw/browser';

import { todoHandlers } from './handlers/todoHandler.ts';

const worker = setupWorker(...todoHandlers);

export { worker };
