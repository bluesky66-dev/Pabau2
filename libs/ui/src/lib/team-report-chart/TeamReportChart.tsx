import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './TeamReportChart.module.less'
import { Popover, Space } from 'antd'
import { Checkbox, Avatar, Table } from '@pabau/ui'
import {
  CloudDownloadOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons'

import HichartsReact from 'highcharts-react-official'
import * as Highcharts from 'highcharts'
import HighchartsMap from 'highcharts/modules/map'
import HighchartsStock from 'highcharts/modules/stock'

if (typeof Highcharts === 'object') {
  HighchartsMap(Highcharts)
  HighchartsStock(Highcharts)
}

const serviceMarkers = [
  {
    marker: 'A',
    color: '#54B2D3',
  },
  {
    marker: 'B',
    color: '#65CD98',
  },
  {
    marker: 'C',
    color: '#FAAD14',
  },
  {
    marker: 'D',
    color: '#7B61E2',
  },
]

export interface TeamReportCategoryType {
  name: string
  field: string
}

export interface TeamReportChartSeries {
  name: string
  data: number[]
  formatter: (value: number) => string
}

export interface TeamReportServiceGroup {
  name: string
  services: string[]
}

export interface TeamReportEmployee {
  name: string
  src: string
}

export interface TeamReportMeta {
  services: string[]
  employees: string[]
  years: string[]
}

export interface TeamReportChartProps {
  type?: 'monthly' | 'quater' | 'yearly'
  ticks: string[]
  series: TeamReportChartSeries[]
  meta: TeamReportMeta
  services: TeamReportServiceGroup[]
  employees: TeamReportEmployee[]
  years: string[]
  onChangeMeta?: (meta: TeamReportMeta) => void
}

export const TeamReportChart: FC<TeamReportChartProps> = ({
  type = 'monthly',
  ticks,
  series,
  services,
  employees,
  years,
  meta,
  onChangeMeta,
}) => {
  const config = {
    mapNavigation: {
      enabled: true,
      enableMouseWheelZoom: true,
    },
    navigator: { enabled: false },
    chart: {
      className: styles.teamReportChart,
    },
    title: { text: undefined },
    legend: { enabled: false },
    xAxis: [
      {
        categories: ticks,
        title: { enabled: false },
        gridLineWidth: 1,
        grindLineColor: '#F1F1F1',
        tickPosition: 'inside',
        tickmarkPlacement: 'on',
        labels: {
          style: {
            color: '#9292A3',
            fontSize: '14px',
          },
        },
      },
    ],
    yAxis: series.map((item, index) => ({
      labels: {
        formatter: function () {
          return item.formatter(this.value)
        },
        style: {
          color: '#9292A3',
          fontSize: '14px',
        },
      },
      title: { enabled: false },
      gridLineWidth: 1,
      grindLineColor: '#F1F1F1',
      tickPosition: 'inside',
      tickmarkPlacement: 'on',
      opposite: index > 0 ? true : undefined,
    })),
    series: series.map((item, index) => ({
      name: item.name,
      data: item.data,
      yAxis: index,
    })),
    plotOptions: {
      series: {
        marker: {
          symbol: 'circle',
          radius: 3,
        },
      },
    },
  }

  const miniChartConfig = (index) => ({
    ...config,
    chart: {
      className: styles.teamReportMiniChart,
      height: 60,
      // width: 300,
    },
    tooltip: { enabled: false },
    credits: { enabled: false },
    mapNavigation: { enabled: false },
    yAxis: [
      {
        height: 0,
        width: 0,
        gridLineWidth: 0,
        labels: { enabled: false },
        title: { enabled: false },
      },
    ],
    xAxis: [
      {
        lineWidth: 0,
        tickLength: 0,
        labels: {
          enabled: false,
        },
      },
    ],
    series: [
      {
        lineWidth: 0,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        data: series[index].data,
      },
    ],
    navigator: {
      enabled: true,
      handles: { enabled: false },
      height: 40,
      margin: 0,
    },
  })

  const tableColumns = [
    {
      title: 'Date',
      visible: true,
      children: [
        {
          title: '',
          dataIndex: 'date',
        },
      ],
    },
    ...series.map((serie, index) => ({
      title: serie.name,
      visible: true,
      children: [
        {
          dataIndex: serie.name,
          align: 'right',
          width: `${100 / (series.length + 1)}%`,
          title: (
            <HichartsReact
              options={miniChartConfig(index)}
              highcharts={Highcharts}
            />
          ),
          render: (value) => serie.formatter(value),
        },
      ],
    })),
  ]

  const tableData = ticks.map((tick, index) => {
    const data = { date: tick }
    series.map((serie) => (data[serie.name] = serie.data[index]))
    return data
  })

  const handleToggleService = (service: string) => {
    const selected = meta.services
    const index = selected.indexOf(service)

    if (index === -1) {
      selected.push(service)
    } else {
      selected.splice(index, 1)
    }

    onChangeMeta?.({ ...meta, services: selected })
  }

  const handleToggleEmployee = (employee: string) => {
    const selected = meta.employees
    const index = selected.indexOf(employee)

    if (index === -1) {
      selected.push(employee)
    } else {
      selected.splice(index, 1)
    }

    onChangeMeta?.({ ...meta, employees: selected })
  }

  const handleToggleYear = (year: string) => {
    const selected = meta.years
    const index = selected.indexOf(year)

    if (index === -1) {
      selected.push(year)
    } else {
      selected.splice(index, 1)
    }

    onChangeMeta?.({ ...meta, years: selected })
  }

  return (
    <div className={styles.teamReportChartWrapper}>
      <div className={styles.teamReportChartHeader}>
        <Space size={32}>
          <div className={styles.services}>
            Select
            {meta.services.map((service, index) => (
              <>
                <span
                  className={styles.service}
                  onClick={() => handleToggleService(service)}
                >
                  {service}
                </span>
                {index === series.length - 2 && (
                  <span style={{ marginLeft: 6 }}>and</span>
                )}
              </>
            ))}
            <Popover
              overlayClassName={styles.selectServicePopup}
              placement="bottomRight"
              title={
                <div className={styles.selectServiceTitle}>Select service</div>
              }
              content={
                <div className={styles.selectServiceContent}>
                  {services.map((grp, index) => (
                    <div
                      className={styles.selectServiceGroup}
                      key={serviceMarkers[index].marker}
                    >
                      <div className={styles.groupTitle}>
                        <div
                          className={styles.marker}
                          style={{ background: serviceMarkers[index].color }}
                        >
                          {serviceMarkers[index].marker}
                        </div>
                        {grp.name}
                      </div>
                      {grp.services.map((service) => (
                        <Checkbox
                          key={service}
                          className={styles.selectService}
                          onChange={(checked) => handleToggleService(service)}
                        >
                          {service}
                        </Checkbox>
                      ))}
                    </div>
                  ))}
                </div>
              }
              trigger="hover"
              className={styles.selectService}
            >
              <PlusCircleOutlined className={styles.addService} />
            </Popover>
          </div>
          <div className={styles.employees}>
            By{' '}
            <Popover
              overlayClassName={styles.selectServicePopup}
              placement="bottomRight"
              title={
                <div className={styles.selectServiceTitle}>
                  Select an employee
                </div>
              }
              content={
                <div className={styles.selectEmployeeContent}>
                  {employees.map((employee) => (
                    <div
                      className={classNames(
                        styles.employee,
                        meta.employees.includes(employee.name) &&
                          styles.selected
                      )}
                      key={employee.name}
                      onClick={() => handleToggleEmployee(employee.name)}
                    >
                      <Avatar
                        size={25}
                        src={employee.src}
                        className={styles.avatar}
                      />
                      <div className={styles.name}>{employee.name}</div>
                    </div>
                  ))}
                </div>
              }
              trigger="hover"
              className={styles.selectService}
            >
              <span className={styles.addEmployee}>
                {employees.length === meta.employees.length
                  ? 'All'
                  : meta.employees.join(' ')}
              </span>
            </Popover>
          </div>
          <div className={styles.years}>
            For{' '}
            <Popover
              overlayClassName={styles.selectServicePopup}
              placement="bottomRight"
              title={
                <div className={styles.selectServiceTitle}>Select a year</div>
              }
              content={
                <div className={styles.selectYearContent}>
                  {years.map((year) => (
                    <div
                      className={classNames(
                        styles.year,
                        meta.years.includes(year) && styles.selected
                      )}
                      key={year}
                      onClick={() => handleToggleYear(year)}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              }
              trigger="hover"
              className={styles.selectService}
            >
              <span className={styles.addYear}>
                {years.length === meta.years.length
                  ? 'All'
                  : meta.years.join(' ')}
              </span>
            </Popover>
          </div>
          <Space size={16} className={styles.actions}>
            <DoubleRightOutlined className={styles.actionButton} />
            <CloudDownloadOutlined className={styles.actionButton} />
            <SettingOutlined className={styles.actionButton} />
            <QuestionCircleOutlined className={styles.actionButton} />
          </Space>
        </Space>
      </div>

      <HichartsReact options={config} highcharts={Highcharts} />

      <div className={styles.teamReportTable}>
        <Table columns={tableColumns} dataSource={tableData as never[]} />
      </div>
    </div>
  )
}

export default TeamReportChart
