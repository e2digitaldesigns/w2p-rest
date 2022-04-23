import { Request, Response } from "express";
const ObjectId = require("mongoose").Types.ObjectId;
import { StaffModel } from "../../models/staff.model";

export const postStaffHandler = async (req: Request, res: Response) => {
  console.log(6, res.locals.domain);

  try {
    const result = await StaffModel.create({
      ...req.body.staffObj
    });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

export const getStaffHandler = async (req: Request, res: Response) => {
  try {
    const result = await StaffModel.find().select({ password: 0, __v: 0 });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

export const getStaffByIdHandler = async (req: Request, res: Response) => {
  try {
    const result = await StaffModel.updateOne(
      {
        _id: ObjectId(req.params._id)
      },
      { ...req.body.updateObj }
    );
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

export const updateStaffHandler = async (req: Request, res: Response) => {
  try {
    const result = await StaffModel.updateOne(
      {
        _id: ObjectId(req.params._id)
      },
      { ...req.body.updateObj }
    );
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

export const deleteStaffHandler = async (req: Request, res: Response) => {
  try {
    const result = await StaffModel.deleteOne({
      _id: ObjectId(req.params._id)
    });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
