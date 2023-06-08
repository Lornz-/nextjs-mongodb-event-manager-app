import { createServer } from 'http';
import { apiResolver } from 'next/dist/server/api-utils/node';
import request from 'supertest';

export const testClient = (handler) =>
  request(
    createServer(async (req, res) =>
      apiResolver(req, res, undefined, handler, {}, true)
    )
  );
