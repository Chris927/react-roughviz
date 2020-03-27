import React, { useRef, useState, useEffect } from 'react'
import * as rv from 'rough-viz/dist/roughviz.min'

let lastId = 0;

const generateId = prefix => `${prefix}${'' + (++lastId)}`

const wrap = rvComp => ({ prefix, ...props }) => {
  const ref = useRef()
  const [ id ] = useState(generateId(prefix || 'roughviz'))
  useEffect(() => {
    const { current: node } = ref
    if (node) {
      new rvComp({
        element: '#' + id,
        ...props
      })
    }
    return () => {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild)
        }
      }      
    }
  }, [ id, props, ref ])

  return <div id={id} ref={ref} />
}

export const Bar = wrap(rv.Bar)
export const BarH = wrap(rv.BarH)
export const Donut = wrap(rv.Donut)
export const Pie = wrap(rv.Pie)
export const Scatter = wrap(rv.Scatter)
export const Line = wrap(rv.Line)
export const StackedBar = wrap(rv.StackedBar)
