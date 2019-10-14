import React from 'react'
import ReactDOM from 'react-dom'
import { Bar, Pie } from './lib'

function App() {
  return <>
    <h1>Fun with roughViz</h1>
    <h3>Bar</h3>
    <Bar
      data='https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv'
      labels='flavor'
      values='price'
    />
    <h3>Pie</h3>
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
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))
