import {fn} from '@cc-heart/utils/helper.js';
import type {Express, Request, Response} from 'express';
import {useHookFactory} from '../hooks/use-hook-factory.js';

function useErrorCatch(err: Error, req: Request, res: Response, next: fn) {
  const {useThrowServiceError} = useHookFactory(req, res);
  console.error(err);
  useThrowServiceError(err?.toString());

  next();
}

export function setupErrorCatch(app: Express) {
  app.use(useErrorCatch);
}
