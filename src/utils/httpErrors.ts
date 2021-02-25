export abstract class HTTPClientError extends Error {
  readonly statusCode!: number;
  readonly name!: string;

  constructor(message: object | string) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400;

  constructor(
    message: string | object = { success: false, message: 'Bad Request' }
  ) {
    super(message);
  }
}

export class HTTP401Error extends HTTPClientError {
  readonly statusCode = 401;

  constructor(
    message: string | object = { success: false, message: 'Unauthorized' }
  ) {
    super(message);
  }
}

export class HTTP403Error extends HTTPClientError {
  readonly statusCode = 403;

  constructor(
    message: string | object = { success: false, message: 'Forbidden' }
  ) {
    super(message);
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor(
    message: string | object = { success: false, message: 'Not found' }
  ) {
    super(message);
  }
}
