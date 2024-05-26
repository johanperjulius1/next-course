import sql from 'better-sqlite3';

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