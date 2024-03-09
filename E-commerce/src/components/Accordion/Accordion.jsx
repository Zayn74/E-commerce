import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from 'react-router-dom';

export default function Example() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Technology
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Link className='text-dark'>
                        Mobile Phones
                    </Link>
                </AccordionItemPanel>
                <AccordionItemPanel>
                    <Link className='text-dark'>
                        Cameras
                    </Link>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Clothes
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Link className='text-dark'>
                       Women
                    </Link>
                </AccordionItemPanel>
                <AccordionItemPanel>
                    <Link className='text-dark'>
                       Men
                    </Link>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}