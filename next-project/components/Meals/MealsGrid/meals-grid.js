import React from 'react'
import styles from './meals-grid.module.css'
import MealItem from '../MealsItem/meal-item'

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map(meal => (
        <li key={meal.id}>{meal.name}
           <MealItem
            {...meal}
          />
        </li>
      ))}
    </ul>
  )
}
