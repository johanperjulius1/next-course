"use server";
import { redirect } from "next/navigation";
// Adding it to top of file makes all functions server actions
import { saveMeal } from "./meals";

function isValidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  // a function guaranteed to execute on the server and only there => server action

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidText(meal.titlel) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'invalid input'
    }
  }

  await saveMeal(meal);
  redirect("/meals");
}
