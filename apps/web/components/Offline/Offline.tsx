import React,{useEffect,useState} from 'react';
import styles from './Offline.module.less';
import {LoadingOutlined } from '@ant-design/icons'
const Offline=()=>{
    const [time,setTime]=useState(15);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(time=>{
                if(time){
                    return time-1;
                }
                return 15;
            })
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);
    return (
        <div className={styles.offlineDiv}>
            Connection lost. Reconnecting in {time} seconds... 
            <button type="button" className={styles.reconnectBtn}>
                Reconnect
                <LoadingOutlined style={{
                    color:'#008000'
                }} />
                </button>
                </div>
    )
}
export default Offline;