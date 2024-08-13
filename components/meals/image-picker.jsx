
'use client'

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image";

export default function ImagePicker({name,label})
{

    const [pickedImage, setPickedImage] = useState()

    const inputRef = useRef();

    function handlePickClick()
    {
        inputRef.current.click();
    }


    function handleImageChange(event)
    {
        const file = event.target.files[0];

        if(!file)
        {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)

    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} fill alt="the image selected by user" />}
                </div>
                <input 
                    className={classes.input}
                    type="file" 
                    id={name}
                    accept="image/png, image/jpg"
                    name={name}
                    ref={inputRef}
                    onChange={handleImageChange}
                    required
                />
                <button   className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}
