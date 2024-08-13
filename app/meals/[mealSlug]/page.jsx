import Image from 'next/image'
import React from 'react'


import classes from "./page.module.css"
import { getMeal } from '@/lib/meals'
import NotFound from '@/app/not-found'


export async function generateMetadata({params})
{
    const meal = await getMeal(params.mealSlug)
    
    if(meal == undefined)
    {
        return NotFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
        openGraph: {
            title: meal.title,
            description: meal.summary,
        },
    };

}

export default async function MealDetailsPage({ params }) {
    const meal = await getMeal(params.mealSlug)

    if(meal == undefined)
    {
        return NotFound();
        // return false;
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')



    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
                __html: meal.instructions
            }}
            >

            </p>
        </main>
        </>
    )
}
