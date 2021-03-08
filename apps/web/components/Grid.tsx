/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import 'react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default class ShowcaseLayout extends React.Component<
  { onLayoutChange: (layout: any, layouts: any) => void },
  any
> {
  constructor(props: any) {
    super(props)
    this.state = {
      currentBreakpoint: 'lg',
      compactType: 'vertical',
      mounted: false,
      layouts: { lg: props.initialLayout },
    }

    this.onBreakpointChange = this.onBreakpointChange.bind(this)
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this)
    this.onLayoutChange = this.onLayoutChange.bind(this)
    this.onNewLayout = this.onNewLayout.bind(this)
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  generateDOM() {
    // @ts-ignore
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div
          key={i}
          className={l.static ? 'static' : ''}
          style={{ backgroundColor: 'green' }}
        >
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      )
    })
  }

  onBreakpointChange(breakpoint: any) {
    this.setState({
      currentBreakpoint: breakpoint,
    })
  }

  onCompactTypeChange() {
    // @ts-ignore
    const { compactType: oldCompactType } = this.state
    const compactType =
      oldCompactType === 'horizontal'
        ? 'vertical'
        : oldCompactType === 'vertical'
        ? null
        : 'horizontal'
    this.setState({ compactType })
  }

  onLayoutChange(layout: any, layouts: any) {
    // @ts-ignore
    this.props.onLayoutChange(layout, layouts)
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() },
    })
  }

  render() {
    return (
      <ResponsiveReactGridLayout
        {...this.props}
        layouts={(this.state as any).layouts}
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        // WidthProvider option
        measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        useCSSTransforms={(this.state as any).mounted}
        compactType={(this.state as any).compactType}
        preventCollision={!(this.state as any).compactType}
      >
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
    )
  }
}

// @ts-ignore
ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
}

// @ts-ignore
ShowcaseLayout.defaultProps = {
  className: 'layout',
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout(),
}

function generateLayout() {
  return _.map(_.range(0, 25), function (item, i) {
    const y = Math.ceil(Math.random() * 4) + 1
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05,
    }
  })
}
