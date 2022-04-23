import express, { Request, Response } from "express";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

interface IntTaskObject {
  _id?: Types.ObjectId;
  staffId?: Types.ObjectId;
  text: string;
  isComplete: boolean;
  timestamp?: string;
}

const errorBlock = async () => {
  throw new Error("Boomer!");
};

export const postTaskHandler = async (
  req: Request<{}, {}, { taskObj: IntTaskObject }, {}>,
  res: Response<{}, { models: any; staffId: Types.ObjectId }>
) => {
  try {
    const result: IntTaskObject = await res.locals.models.tasksModel.create({
      ...req.body.taskObj,
      staffId: res.locals.staffId
    });

    res.json(result);
  } catch (error) {
    res.status(400);
  }
};

export const getAllTasksHandler = async (
  req: Request,
  res: Response<{}, { models: any; staffId: Types.ObjectId }>
) => {
  console.log(39, res.locals.staffId);
  try {
    const result: IntTaskObject[] = await res.locals.models.tasksModel
      .find({
        staffId: res.locals.staffId
      })
      .select({
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
    const result = await res.locals.models.tasksModel.updateOne(
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
    const result = await res.locals.models.tasksModel.deleteOne({
      _id: ObjectId(req.params._id)
    });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
