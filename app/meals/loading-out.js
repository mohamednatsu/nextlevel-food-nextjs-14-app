import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import classes from "./loading.module.css"

export default function loading() {
    return (
        <p className={classes.loading}>
                Loading...
        </p>
    )
}
