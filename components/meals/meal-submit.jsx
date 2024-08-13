'use client'

import {useFormStatus} from "react-dom"

// import {useActionState} from "react"

export default function MealSubmitForm() {
    const {pending} = useFormStatus();
    
    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : 'Share Meal'}
        </button>
    )
}
