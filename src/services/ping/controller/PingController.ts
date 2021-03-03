import { Get, Route } from 'tsoa';

import IPingResponse from '../repository/IPingResonse';
import { PingService } from '../repository/PingService';

@Route('ping')
export default class PingController {
  @Get('/')
  public async getMessage(): Promise<IPingResponse> {
    return new PingService().get();
  }
}
