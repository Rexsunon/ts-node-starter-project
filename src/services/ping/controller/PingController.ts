import { Get, Route } from 'tsoa';

import IPingResponse from '../repository/IPingResonse';

@Route('ping')
export default class PingController {
  @Get('/')
  public async getMessage(): Promise<IPingResponse> {
    return {
      message: 'pong',
    };
  }
}
