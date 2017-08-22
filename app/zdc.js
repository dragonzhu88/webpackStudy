/**
 * Created by dragon on 2017/8/17.
 */
import React, {Component} from 'react'
import config from './config.json';
import styles from './zdc.css';

class Zdc extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
    </div>
    );
    }
}

export default Zdc
