'use client'
import React from 'react'
import styles from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image'

// want to trigger a click on input. So now trigger this by adding ref on element

export default function ImagePicker({ label, name }) {
  const imageInput = useRef()
  // can now use the ref to trigger the click method
  const [pickedImage, setPickedImage] = useState()
  function handlePickClick() {
    imageInput.current.click()

  }

  function handlePickedImageChange(event) {
    const file = event.target.files[0]
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader(file)

    fileReader.onload = function (event) {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }
  return (
    <div className={styles.picker}>
      hello from image picker
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage &&
            <Image
              src={pickedImage}
              alt="the image picked by the user"
              fill
            />

          }
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handlePickedImageChange}
          required
        />
        {/* type shall be button otherwise it will be submit and submit surrounding form */}
        {/* eventhandlers on onClick happens in the client and cant be managed on the
          server. this goes for all event handling props */}
        <button className={styles.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div >
  )
}

// export default function ImagePicker() {
//   return <div>ImagePicker</div>
// }