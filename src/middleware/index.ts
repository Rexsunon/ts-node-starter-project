import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleMorgan,
  handleStatic,
} from './common';

import { handleAPIDocs } from './apiDocs';
import { handelLogging } from './logging';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleMorgan,
  handleStatic,
  handleAPIDocs,
  handelLogging,
];
