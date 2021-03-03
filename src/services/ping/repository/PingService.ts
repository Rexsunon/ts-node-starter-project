import IPingResponse from './IPingResonse';

export type PingCreationParams = Pick<IPingResponse, 'message'>;

export class PingService {
  public get(): IPingResponse {
    return {
      message: 'pong',
    };
  }
}
