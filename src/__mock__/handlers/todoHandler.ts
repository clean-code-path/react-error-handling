import { http, HttpResponse } from 'msw';

export const todoHandlers = [
  http.get('/todo', () => {
    return HttpResponse.json({
      id: 1,
      todo: 'todo-1',
    });
  }),
  http.get('/todo-list', () => {
    return HttpResponse.json([
      {
        id: 1,
        todo: 'todo-1',
      },
      {
        id: 2,
        todo: 'todo-2',
      },
      {
        id: 3,
        todo: 'todo-3',
      },
      {
        id: 4,
        todo: 'todo-4',
      },
    ]);
  }),
];
