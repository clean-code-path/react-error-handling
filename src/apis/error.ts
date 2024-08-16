import { z } from 'zod';

export class FiestaError extends Error {
  public statusCode: number;
  public code: string;

  constructor(statusCode: number, code: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = this.constructor.name;
  }
}

// 서버 에러 클래스
export class ServerError extends FiestaError {
  constructor(code: string, message: string) {
    super(500, code, message);
  }
}

// 클라이언트 에러 클래스
export class ClientError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// 페스티벌 에러 클래스
export class FestivalError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// 방문일지 에러 클래스
export class LogsError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// 유저 에러 클래스
export class UserError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// 리뷰 에러 클래스
export class ReviewError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// FiestaError의 스키마 정의
const FiestaErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  statusCode: z.number(),
});

export function createFiestaError(error: unknown) {
  try {
    // 객체가 FiestaError의 형태를 따르는지 확인
    const parsedError = FiestaErrorSchema.parse(error);

    const { code, message, statusCode } = parsedError;
    const initial = code.charAt(0);

    if (initial === 'S') {
      return new ServerError(code, message);
    }
    if (initial === 'C') {
      return new ClientError(statusCode, code, message);
    }
    if (initial === 'F') {
      return new FestivalError(statusCode, code, message);
    }
    if (initial === 'L') {
      return new LogsError(statusCode, code, message);
    }
    if (initial === 'U') {
      return new UserError(statusCode, code, message);
    }
    if (initial === 'R') {
      return new ReviewError(statusCode, code, message);
    }

    return new Error(`Unrecognized error code: ${JSON.stringify(error)}`);
  } catch (e) {
    // zod에서 오류 발생 시 처리
    return new Error(`Invalid Error Object: ${JSON.stringify(error)}`);
  }
}
