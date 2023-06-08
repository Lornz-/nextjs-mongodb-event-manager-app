import { createServer } from 'http';
import { apiResolver } from 'next/dist/server/api-utils/node';
import request from 'supertest';

export const testClient = (handler) =>
  request(
    createServer(async (req, res) => {
      return apiResolver(req, res, undefined, handler);
    })
  );
