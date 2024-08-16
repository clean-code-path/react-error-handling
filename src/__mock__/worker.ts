import { setupWorker } from 'msw/browser';

import { errorHandlers } from './handlers/errorHandler.ts';
import { todoHandlers } from './handlers/todoHandler.ts';

const worker = setupWorker(...todoHandlers, ...errorHandlers);

export { worker };
