import { type Request, type Response } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment,
} from "../models/commentModel.js";

export const getAllCommentsController = async (req: Request, res: Response) => {
  try {
    const items = await getAllComments();
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createCommentController = async (req: Request, res: Response) => {
  try {
    const newItem = await createComment(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCommentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateComment(Number(id), req.body);
    if (updatedItem.length === 0) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteComment(Number(id));
    if (deletedItem.length === 0) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }
    res.status(204).json(deletedItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getCommentByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await getCommentById(Number(id));

    if (!item) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
