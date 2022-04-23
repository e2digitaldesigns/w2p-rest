import express, { Request, Response } from "express";
import { Types } from "mongoose";
import { TaskModel } from "../../models/task.model";

const ObjectId = require("mongoose").Types.ObjectId;

interface IntTaskObject {
  _id?: Types.ObjectId;
  staffId?: Types.ObjectId;
  text: string;
  isComplete: boolean;
  timestamp?: string;
}

export const postTaskHandler = async (
  req: Request<{}, {}, { taskObj: IntTaskObject }, {}>,
  res: Response<{}, { staffId: Types.ObjectId }>
) => {
  try {
    const result: IntTaskObject = await TaskModel.create({
      ...req.body.taskObj,
      staffId: res.locals.staffId
    });
    console.log(result);
    res.json(result);
  } catch (error: any) {
    res.send(error);
  }
};

export const getAllTasksHandler = async (
  req: Request,
  res: Response<{}, { staffId: Types.ObjectId }>
) => {
  try {
    const result: IntTaskObject[] = await TaskModel.find({
      staffId: res.locals.staffId
    }).select({
      __v: 0
    });
    res.json(result);
  } catch (error: any) {
    res.send(error);
  }
};

export const updateTaskHandler = async (
  req: Request<{ _id: string }, {}, { updateObj: IntTaskObject }, {}>,
  res: Response
) => {
  try {
    const result = await TaskModel.updateOne(
      {
        _id: ObjectId(req.params._id)
      },
      { ...req.body.updateObj }
    );
    res.json(result);
  } catch (error: any) {
    res.send(error);
  }
};

export const deleteTaskHandler = async (
  req: Request<{ _id: string }>,
  res: Response
) => {
  try {
    const result = await TaskModel.deleteOne({ _id: ObjectId(req.params._id) });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
