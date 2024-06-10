'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  console.log('hello from form submit')

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit meal'}
    </button>
  );
}


