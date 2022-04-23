import express, { Request, Response } from "express";
import { Types } from "mongoose";
import { IPageModel, PageModel } from "../../models/page.model";

const ObjectId = require("mongoose").Types.ObjectId;

const errorBlock = async () => {
  throw new Error("Boomer!");
};

export const postPageHandler = async (
  req: Request<{}, {}, { pageObj: IPageModel }, {}>,
  res: Response<{}, { pageId: Types.ObjectId }>
) => {
  try {
    const result: IPageModel = await PageModel.create({
      ...req.body.pageObj
    });

    res.json(result);
  } catch (error) {
    res.status(400);
  }
};

export const getAllPagesHandler = async (req: Request, res: Response) => {
  try {
    const result: IPageModel[] = await PageModel.find({
      staffId: res.locals.staffId
    }).select({
      __v: 0
    });
    res.json(result);
  } catch (error: any) {
    res.send(error);
  }
};

export const updatePageHandler = async (
  req: Request<{ _id: string }, {}, { updateObj: IPageModel }, {}>,
  res: Response
) => {
  try {
    const result = await PageModel.updateOne(
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

export const deletePageHandler = async (
  req: Request<{ _id: string }>,
  res: Response
) => {
  try {
    const result = await PageModel.deleteOne({ _id: ObjectId(req.params._id) });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
