import React from 'react'
import { StoryCard} from "components/cards/StoryCard"

export const Stories  = () => {
    return (
    <article className="page-wrapper">
            <section className="story-card-title">
                <h1>What is your story?</h1>
            </section>
            <section className="story-card-wrapper">
                    <div>
                        <StoryCard
                            coverImage="../../assets/Gruppbild-av-ingenjoerer-i-fabrik.jpg"
                            thumbnailUrl="../../assets/Maskinoperatoer-Drar-Koppartrad-I-En-Maskin.jpeg"
                            title="Anställningsbar om 10 år?"
                            secondaryText="Uppdaterade kunskaper gav nya insikter"
                            supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            coverImage="../../assets/ledarskapsutbildning.jpg"
                            thumbnailUrl="../../assets/Porträtt5.jpg"
                            title="Livslångt lärande"
                            secondaryText="Lärande kan fortgå hela livet"
                            supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                        </StoryCard>
                    </div>
            </section>
            <section className="story-card-wrapper">
                    <div>
                        <StoryCard
                            coverImage="../../assets/lasercutting.jpg"
                            thumbnailUrl="../../assets/Porträtt1.jpg"
                            title="Livslångt lärande"
                            secondaryText="Lärande kan fortgå hela livet"
                            supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            coverImage="../../assets/svetsare.jpg"
                            thumbnailUrl="../../assets/Porträtt4.jpg"
                            title="Från svetsare till chef"
                            secondaryText="Ledarskapsprogram gav karriärsmöjlighter"
                            supportingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                        </StoryCard>
                    </div>
            </section>
    </article>
    )
}
