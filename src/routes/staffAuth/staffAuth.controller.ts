import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { StaffModel } from "../../models/staff.model";

export const staffLoginHandler = async (req: Request, res: Response) => {
  try {
    if (!process?.env?.JWT_SECRET_TOKEN) {
      throw new Error("Boom!");
    }

    const { email, password } = req.body;

    const result = await StaffModel.findOne({
      isActive: true,
      email,
      password
    }).select({ name: 1, email: 1, password: 1 });

    const data = {
      name: result?.name,
      token: jwt.sign(
        {
          staffId: result?._id,
          name: result?.name,
          email: result?.email,
          authLevel: "admin"
        },
        process.env.JWT_SECRET_TOKEN
      )
    };

    res.json(data);
  } catch (error) {
    res.send(error);
  }
};
