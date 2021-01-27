import React from 'react';
import { data } from './data';
import { SetupGrid } from '@pabau/ui'
import styles from '../Setup.module.less'

const Grid = () => {
    return (
        <div className={styles.gridWrapper}>
        {data && data.map((value, index) => (
           <SetupGrid key={index} {...value}/>
        ))}
        </div>
    );
}

export default Grid