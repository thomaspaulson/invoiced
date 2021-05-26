import React from 'react';
import ReactDOM from 'react-dom';

import { element } from 'prop-types';
//import Icon from '@/Shared/Icon'
import Header from '@/shared/components/Header';  
import Content from '@/shared/components/Content';
  
const App = (props) =>  {
    return (
        <>
            <Header />                
            <Content>
                {props.children}        
            </Content>
        </>
    );
}

export default App;

App.propTypes = {
    children: element
};
  
