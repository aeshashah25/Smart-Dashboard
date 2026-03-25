import Joi from "joi";

export const productSchema = Joi.object({
  title: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().min(10).required(),
  category: Joi.string().required(),
});