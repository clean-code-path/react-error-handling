import { http, HttpResponse } from 'msw';

export const errorHandlers = [
  http.get('http://localhost:3000/error1', () => {
    return HttpResponse.json(
      {
        statusCode: 500,
        code: 'S001',
        message: '서버에 문제가 생겼습니다.',
      },
      { status: 500 }
    );
  }),
  http.get('http://localhost:3000/error2', () => {
    return HttpResponse.json(
      {
        statusCode: 500,
        code: 'L002',
        message: '서버에 두번째 문제가 생겼습니다.',
      },
      { status: 500 }
    );
  }),
  http.get('http://localhost:3000/error3', () => {
    return HttpResponse.json(
      {
        statusCode: 500,
        message: '서버에 의도치않은 문제가 생겼습니다.',
      },
      { status: 500 }
    );
  }),
];
