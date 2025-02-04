/**
 * @module Login Router
 * @description Routes all requests to login endpoint
 */
import { Request, Response, Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

// ==========================================================
// Route: /
// Purpose: verify username and password
// ==========================================================

router.post(
  '/',
  userController.verifyUser,
  // userController.addCookie,
  (req: Request, res: Response): Response => {
    if (res.locals.token) {
      res.cookie('admin', res.locals.token, { httpOnly: true });
      return res.status(201).json(res.locals.verifiedUser);
    } else {
      return res.status(201).json(res.locals.user);
    }
  }
);

export default router;
