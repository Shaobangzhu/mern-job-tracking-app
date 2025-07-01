import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';

// Get All Jobs

export const getAllJobs = async (req, res) => {
    console.log(req.user);
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
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({ job });
};

// EDIT JOB

export const updateAJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

// DELETE JOB

export const deleteAJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};