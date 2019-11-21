import React from 'react'
import ReactDOM from 'react-dom'
import { Bar, Pie, StackedBar } from './lib'

function App() {
  return <>
    <h1>Fun with roughViz</h1>
    <div style={{
	      display: 'flex',
	      flex: 'wrap',
        order: 'row'
    }}>
      <Bar
        data='https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv'
        labels='flavor'
        values='price'
      />
      <Pie
        data={{
          labels: ['North', 'South', 'East', 'West'],
          values: [10, 5, 8, 3]
        }}
        title='Regions'
        colors={['red', 'orange', 'blue', 'skyblue']}
        roughness={8}
        strokeWidth={3}
      />
      <StackedBar
        data={[
          {month:'Jan', A:20, B: 5,  C: 10},
          {month:'Feb', A:25, B: 10, C: 20},
          {month:'March', A:30, B:50, C:10}
        ]}
        labels='month'
        title='Monthly Revenue'
      />
    </div>
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))
