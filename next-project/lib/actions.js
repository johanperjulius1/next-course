'use server'
import { redirect } from "next/navigation"
// Adding it to top of file makes all functions server actions
import { saveMeal } from "./meals"

export async function shareMeal(formData) {
  // a function guaranteed to execute on the server and only there => server action

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }
 await saveMeal(meal)
 redirect('/meals')
}