import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleMorgan,
  handleStatic,
} from './common';

import { handleAPIDocs } from './apiDocs';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleMorgan,
  handleStatic,
  handleAPIDocs,
];
