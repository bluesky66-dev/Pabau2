/* eslint-disable */
import React from "react";
import styles from "./Securitytools.module.less";
import { Badge } from "../badge/Badge";

import icon_force2fa from "../../assets/images/security/force2fa.svg";
import icon_authdevice from "../../assets/images/security/authdevice.svg";
import icon_pwdpolicy from "../../assets/images/security/pwdpolicy.svg";

/* eslint-disable-next-line */
interface P {}

export function SecurityTools(props: P) {
    return (
        <div className={styles.scoreBody}>
            <p className={styles.phead}>Security Tools</p>
            <div className={styles.container}>
                <div className={styles.colStatusLabel}>
                    <img className={styles.iconSecuritytools} src={icon_force2fa} alt="" />
                </div>
                <div className={styles.containercol}>
                    <span className={styles.p1}>Force 2FA</span>
                    <span className={styles.p2}>Strat a video call from your conversations</span>
                </div>
                <div className={styles.statelabel}>
                    <Badge />
                </div>
            </div>
            <hr className={styles.securityToolsline} />

            <div className={styles.container}>
                <div className={styles.colStatusLabel}>
                    <img className={styles.iconSecuritytools} src={icon_authdevice} alt="" />
                </div>
                <div className={styles.containercol}>
                    <span className={styles.p1}>Authorized Devices</span>
                    <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
                </div>
                <div className={styles.statelabel}>
                    <Badge />
                </div>
            </div>
            <hr className={styles.securityToolsline} />

            <div className={styles.container}>
                <div className={styles.colStatusLabel}>
                    <img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" />
                </div>
                <div className={styles.containercol}>
                    <span className={styles.p1}>Password Policy</span>
                    <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
                </div>
                <div className={styles.statelabel}>
                    <Badge />
                </div>
            </div>

            <hr className={styles.securityToolsline} />

            <div className={styles.container}>
                <div className={styles.colStatusLabel}>
                    <img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" />
                </div>
                <div className={styles.containercol}>
                    <span className={styles.p1}>Password Policy</span>
                    <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
                </div>
                <div className={styles.statelabel}>
                    <Badge />
                </div>
            </div>

            <hr className={styles.securityToolsline} />
            <div className={styles.container}>
                <div className={styles.colStatusLabel}>
                    <img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" />
                </div>
                <div className={styles.containercol}>
                    <span className={styles.p1}>Password Policy</span>
                    <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
                </div>
                <div className={styles.statelabel}>
                    <Badge disabled={false} />
                </div>
            </div>
        </div>
    );
}

export default SecurityTools;
