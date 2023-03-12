import React from 'react';
import ReactDOM from 'react-dom';import { useState } from "react";
import { Button, ButtonType } from '../components/Button';
import {
  Section,
} from "gatsby-theme-portfolio-minimal";


export default function App() {
  return (
    <>
        <Section>
          <p>Click the button below to see a sample of some of my video projects.</p>
          <p>Use the password: <b>joseph</b></p>

                            <Button
                                type={ButtonType.LINK}
                                url='https://vimeo.com/showcase/8404350'
                                label='Click to See Videos'
                                target="_blank"
                            />

        </Section>
    </>
  );
}