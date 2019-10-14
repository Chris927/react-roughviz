# react-roughviz

This is a thin [React](https://reactjs.org) wrapper around the awesome [roughViz](https://github.com/jwilber/roughViz).

## Installation

```
npm i react-roughviz
```

## Usage

```jsx
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
    />
```

See it in action here: https://codesandbox.io/s/react-codesandbox-urbsw?fontsize=14
