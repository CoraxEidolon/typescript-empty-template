import React from 'react';
import {render} from 'react-dom';
import basic_pageLoaded from "./basic_pageLoaded";
import {Color} from "../components/Color";

basic_pageLoaded((rootContainer)=>{
    render(<Color text={'Пример'}/>, rootContainer);
});
