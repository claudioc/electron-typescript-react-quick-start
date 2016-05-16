import HelloWorld from './hello-world';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Greeting {

    hello() {

        ReactDOM.render(
            <HelloWorld />,
            document.getElementById('content')
        );
    }
};