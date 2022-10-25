import React from 'react';
import { Hello } from './hello';
import { Welcome } from './welcome';
import Counter from './counter';

const name = <strong>Alfio</strong>
export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={name} age={20}/>
                <Counter />
            </div>
        )
    }
}