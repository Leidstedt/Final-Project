import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { StoryCard} from "components/StoryCard"

export const Stories  = () => {
    return (
    <article className="card-wrapper">
            
            <section className="first-card">
                <h1>What is your story?</h1>
            </section>
            <section className="story-card-wrapper">

        <div>
            <StoryCard
                coverImage="https://picsum.photos/500/300"
                thumbnailUrl="https://picsum.photos/500/300"
                title="Title"
                secondaryText="Secondary text"
                supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
            </StoryCard>
        </div>
        <div>
            <StoryCard
                coverImage="https://picsum.photos/500/300"
                thumbnailUrl="https://picsum.photos/500/300"
                title="Title"
                secondaryText="Secondary text"
                supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
            </StoryCard>
        </div>
        </section>
    </article>
    )
}
