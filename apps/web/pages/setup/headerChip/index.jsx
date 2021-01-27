import React from 'react';
import { data } from './data';
import { SetupChip } from '@pabau/ui'
import styles from '../Setup.module.less'

const HeaderChip = () => {
    return (
        <div className={styles.headerChipWrapper}>
        {data && data.map((value, index) => (
           <SetupChip key={index} {...value}/>
        ))}
        </div>
    );
}

export default HeaderChip