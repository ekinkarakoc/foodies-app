"use server";

import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const isInvalidText = () => {
  return !meal.title || meal.title, trim() == " ";
};

export const shareMeal = async (formData) => {
  // const meal = {
  //   title: formData.get("title"),
  //   summary: formData.get("summary"),
  //   instructions: formData.get("instructions"),
  //   image: formData.get("image"),
  //   creator: formData.get("name"),
  //   creator_email: formData.get("email"),
  // };

  // await saveMeal(meal);

  redirect("/meals");
};
