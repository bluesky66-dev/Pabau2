import React, { ReactText, useState } from "react";
import { SingleReport } from "../SingleReport/SingleReport";
import { ShowMore } from "../ShowMore/ShowMore";

import styles from "./ReportsCard.module.scss";

const ReactHighcharts = require("react-highcharts");

interface report {
  id: number;
  reportCode: string;
  reportName: string;
  isNew: boolean;
  favorite: boolean;
}

interface ReportsCardProps {
  catHeading?: string;
  description?: string;
  graphDescription?: string;
  chartLabel?: string;
  reports?: report[];
  graphData?: ReactText[][];
}

export const ReportsCard: React.FC<ReportsCardProps> = ({
  reports = [],
  catHeading,
  graphDescription,
  description,
  chartLabel,
  graphData,
}) => {
  const [showAll, setShowAll] = useState(false);

  const config = {
    chart: {
      type: "area",
      backgroundColor: "rgba(236, 237, 240, 0.2)",
      height: "36px",
      borderRadius: 3,
      marginBottom: 5,
    },

    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    tooltip: {
      formatter: function () {
        var self: any = this;
        return `${self.key} - ${chartLabel + self.y}`;
      },
    },

    series: [
      {
        name: catHeading,
        data: graphData,
      },
    ],
  };

  const showMoreHandler = () => setShowAll((showAll) => !showAll);

  return (
    <div className={styles.reportsCard}>
      <h3 className={styles.reportsCard__title}>{catHeading}</h3>
      <p className={styles.reportsCard__description}>{description}</p>
      <div className={styles.reportsCard__graphDescContainer}>
        <span>{graphDescription}</span>
        <span>{chartLabel}</span>
      </div>

      <div className={styles.reportsCard__graph}>
        <ReactHighcharts config={config} />
      </div>

      {showAll
        ? reports.map((report, i) => {
            if (i === reports.length - 1) {
              return (
                <>
                  <SingleReport
                    key={report.id}
                    reportCode={report.reportCode}
                    reportName={report.reportName}
                    isNew={report.isNew}
                    favorite={report.favorite}
                  />
                  <ShowMore
                    key={i + 1}
                    length={reports.length}
                    showAll={showAll}
                    showMoreHandler={showMoreHandler}
                  />
                </>
              );
            }
            return (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            );
          })
        : reports.length > 10
        ? reports.map((report, i) =>
            i > 8 ? (
              i < 10 ? (
                <ShowMore
                  key={i + 1}
                  length={reports.length}
                  showAll={showAll}
                  showMoreHandler={showMoreHandler}
                />
              ) : (
                ""
              )
            ) : (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            )
          )
        : [
            ...reports,
            ...new Array(10 - reports.length).fill(""),
          ].map((report, i) =>
            report ? (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            ) : (
              <div key={i + 1} className={styles.reportsCard__cell}></div>
            )
          )}
    </div>
  );
};
