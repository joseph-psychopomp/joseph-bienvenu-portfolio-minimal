import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { useMediaQuery } from 'gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery';
import { Button, ButtonType } from './interestcomponents/Button';
import './style.css';


export default function MyComponent() {
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');
          function blank1() {
       const greeting = 'Hello Function Component!';
    }
  return (

        <Animation type="fadeUp">
        <div id="PoemWrapper">
        <section>
 <h1 class="heading">My Poems & Translations Online</h1>
    <div class="Interests">
    <div class="Interest">
    </div>
        </div>
            <div class="Interests">
    <div class="Interest">
        <a
             href="https://www.youtube.com/watch?v=IrNnVFkd91c&ab_channel=JosephBienvenu"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="Dada Hit Parade"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="http://www.ezratranslation.com/wp-content/uploads/2021/06/Volume-12-number-3.pdf"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="Otokar Brezina Translation"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="https://www.bigbridge.org/BB14/poetry-joebienvenu.html"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="Big Bridge 14"
            onClickHandler={blank1}
                            />
      </a>
    </div>
    <div class="Interest">
        <a
             href="https://web.archive.org/web/20080219062238/http://www.h-ngm-n.com/h_ngm_n-7/joseph-bienvenu.html"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="H-ngm-n 7"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="https://www.youtube.com/watch?v=S4I2197AeEI&ab_channel=JosephBienvenu"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="At the Apple Barrel"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="https://web.archive.org/web/20150918183954/http://www.h-ngm-n.com/h_ngm_n-8/2009/4/2/joseph-bienvenu.html"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="H-ngm-n 8"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="http://www.gutcult.com/Site/litjourn5/html/JB1.html"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="GutCult Issue 6"
            onClickHandler={blank1}
                            />
      </a>
    </div>
      <div class="Interest">
        <a
             href="https://www.youtube.com/watch?v=R-iPVyKIjTs&ab_channel=tremontarama"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="In Cleveland"
            onClickHandler={blank1}
                            />
      </a>
    </div>      <div class="Interest">
        <a
             href="https://web.archive.org/web/20030503191405/http://www.canwehaveourballback.com/15bienvenu.htm"
             target='_blank'
            >
        <Button 
            type={ButtonType.BUTTON}
            class="poetryButton"
            label="Canwehaveourballback 15"
            onClickHandler={blank1}
                            />
      </a>
    </div>
        </div>
        </section>
                </div>
 </Animation>
  );
}


