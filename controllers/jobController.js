import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

// Get All Jobs

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ jobs });
};

// Create One Job

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    res.status(StatusCodes.CREATED).json({ job });
};

// Get Single Job

export const getAJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) throw new NotFoundError(`no job with id ${id}`);
    res.status(StatusCodes.OK).json({ job });
};

// EDIT JOB

export const updateAJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!updatedJob) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    res.status(StatusCodes.OK).json({ msg: 'job modified', job });
};

// DELETE JOB

export const deleteAJob = async (req, res) => {
    const { id } = req.params;
    const removeJob = await Job.findByIdAndDelete(id);

    if (!removeJob) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    res.status(StatusCodes.OK).json({ msg: 'job deleted' });
};