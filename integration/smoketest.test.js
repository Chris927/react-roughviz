require('regenerator-runtime/runtime');

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should match the title of the demo page', async () => {
    await expect(page).toMatchElement('h1', { text: 'Fun with roughViz' })
    // await page.screenshot({ path: '/tmp/react-roughviz-page.jpg'})
  })

})