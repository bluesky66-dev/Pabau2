import React from 'react';
import { data } from './data';
import { Webinar, Button } from '@pabau/ui'
import styles from '../Setup.module.less'

const WebinarCard = () => {
    return (
        <div className={styles.rightSide}>
            <div className={styles.textTitle}>
                Live & Upcoming Webinars
            </div>
            {data && data.map((value, index) => (
                <Webinar key={index} {...value} />
            ))}
            <Button className={styles.btnView}>
                View Full Schedule
            </Button>
        </div>
    );
}

export default WebinarCard