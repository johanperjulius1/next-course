import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

// establish db connection
const db = sql('meals.db')

// add async to create promise
export async function getMeals () {
  await new Promise((resolve) => setTimeout(resolve, 0))
  // throw new Error('Failed to fetch meals')

  // all is used for fetching data, run for saving/posting and get for single row
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal (slug) {
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
 }

 export function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true })
  const instructions = xss(meal.instructions)
 }