import { Router } from "express";
import {
  getAllJobs,
  getAJob,
  createJob,
  updateAJob,
  deleteAJob,
} from "../controllers/jobController.js";
import { validateJobInput, validateIdParam  } from "../middleware/validationMiddleware.js";

const router = Router();

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(validateIdParam, getAJob)
  .patch(validateJobInput, validateIdParam, updateAJob)
  .delete(validateIdParam, deleteAJob);

export default router;