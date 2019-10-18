import React from 'react'
import ReactDOM from 'react-dom'
import { Bar, Pie } from './lib'

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
    </div>
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))
