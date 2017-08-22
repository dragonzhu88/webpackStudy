/**
 * Created by dragon on 2017/8/17.
 */
import React, {Component} from 'react'
import config from './config.json';

class Zdc extends Component{
    render() {
        return (
            <div>
            {config.greetText}
    </div>
    );
    }
}

export default Zdc
