import React, {FC, ReactElement} from "react";
import classNames from 'classnames'
import {CheckOutlined} from "@ant-design/icons";
import {Button} from '@pabau/ui'
import styles from './Integration.module.less'
import xero from "../../assets/images/xero.png";
import mailchimp from "../../assets/images/mailchimp-freddie-icon.png";
import july17 from "../../assets/images/july17.png";
import stripe from "../../assets/images/stripe-2 1.png";
import gocardless from "../../assets/images/gocardless.png";
import healthcode from "../../assets/images/healthcode.png";
import SAP from "../../assets/images/SAP-Logo.png";
import treatwell from "../../assets/images/treatwell.png";
import BNF from "../../assets/images/BNF.png";
import RingCenral from "../../assets/images/RingCenral.png";
import Ometria from "../../assets/images/Ometria.png";
import Doctolib from "../../assets/images/Doctolib.png";

interface itemsSchema {
  'title': string,
  'subTitle': string,
  'logoImage': ReactElement
  'installed': number
  'categories': Array<string>
}

interface P {
  category: string,
  items: itemsSchema[]
}

const AllCollectionsHeaderCollections = [
  {
    'title': 'Seamlessly schedule meetings',
    'route': '/',
    'backColor': '/'
  },
  {
    'title': 'Built by Intercom',
    'route': '/',
    'backColor': '/'
  },
  {
    'title': 'Supercharge customer data',
    'route': '/',
    'backColor': '/',
  }
];

const AllCollectionsHeader: FC = () => {
  return (
    <div>
      <div className={styles.tabMenuWrapper}>
        <div className={styles.collectionWrapper}>
          {AllCollectionsHeaderCollections.map(value => (
            <div className={styles.collectionBox}>
              <h4>{value.title}</h4>
              <Button type="primary" className={styles.btnColl}>View collection &#x2192; </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const AllCollectionsBody: FC<P> = ({
                                            category = 'ALL',
                                            items = []
                                          }) => {
  category = category.toUpperCase()
  return (
    <>
      <div className={styles.itemWrapper}>
        {items.map((value) => (
          <>
            {value.categories.indexOf(category) === 0 ? (
              <div
                className={value.installed === 1 ? classNames(styles.itemBox, styles.active) : classNames(styles.itemBox)}>
                    <span className={styles.checkWrap}>
                    <CheckOutlined/>
                    </span>
                <div className={styles.img}>
                  <img src={value.logoImage}/>
                </div>
                <h5>{value.title}</h5>
                <p>
                  {value.subTitle}
                </p>
              </div>
            ) : category === "ALL" ? (
              <>
                {
                  <div
                    className={value.installed === 1 ? classNames(styles.itemBox, styles.active) : classNames(styles.itemBox)}>
                    <span className={styles.checkWrap}>
                    <CheckOutlined/>
                    </span>
                    <div className={styles.img}>
                      <img src={value.logoImage}/>
                    </div>
                    <h5>{value.title}</h5>
                    <p>
                      {value.subTitle}
                    </p>
                  </div>
                }
              </>
            ) : (
              <>000</>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default AllCollectionsHeader
