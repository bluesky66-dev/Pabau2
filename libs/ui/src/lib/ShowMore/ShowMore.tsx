import ClassNames from "classnames";

import styles from "./ShowMore.module.scss";
console.log(styles);

export interface ShowMoreProps {
  length?: number;
  showAll?: boolean;
  showMoreHandler?: () => void;
}

export const ShowMore: React.FC<ShowMoreProps> = ({
  length = 9,
  showAll = false,
  showMoreHandler,
}) => {
  return (
    <div className={styles.showMore} onClick={showMoreHandler}>
      <div className={ClassNames(styles.showMore__arrow, showAll && styles.showMore__arrowRotated)}>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8125 0H10.6406C10.561 0 10.486 0.0390626 10.4391 0.103125L6.00002 6.22188L1.56095 0.103125C1.51408 0.0390626 1.43908 0 1.35939 0H0.187515C0.0859523 0 0.0265773 0.115625 0.0859523 0.198438L5.59533 7.79375C5.79533 8.06875 6.2047 8.06875 6.40314 7.79375L11.9125 0.198438C11.9735 0.115625 11.9141 0 11.8125 0Z"
            fill="#54B2D3"
          />
        </svg>
      </div>
      <span className={styles.showMore__text}>
        {" "}
        {showAll ? "Hide" : `Show more (${length - 9})`}
      </span>
    </div>
  );
};
