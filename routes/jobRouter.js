import { Router } from "express";
import {
  getAllJobs,
  getAJob,
  createJob,
  updateAJob,
  deleteAJob,
} from "../controllers/jobController.js";

const router = Router();

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getAJob).patch(updateAJob).delete(deleteAJob);

export default router;