import React, { useRef, useState, useEffect } from 'react';
import * as rv from 'rough-viz/dist/roughviz.min';

const generateId = prefix => `${prefix}${('' + Math.random()).split('.')[1]}`;

const wrap = rvComp => ({ prefix, ...props }) => {
  const ref = useRef();
  const [id] = useState(generateId(prefix || 'roughviz-'));
  useEffect(() => {
    if (ref.current) {
      // since this effect runs only on prop changes,
      // it's safe to assume we want to redraw
      ref.current.childNodes.forEach(node => node.remove());

      new rvComp({
        element: '#' + id,
        ...props
      });
    }
  }, [id, props]);

  return <div id={id} ref={ref} />;
};

export const Bar = wrap(rv.Bar);
export const BarH = wrap(rv.BarH);
export const Donut = wrap(rv.Donut);
export const Pie = wrap(rv.Pie);
export const Scatter = wrap(rv.Scatter);
export const Line = wrap(rv.Line);
export const StackedBar = wrap(rv.StackedBar);
