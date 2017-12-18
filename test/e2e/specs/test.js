// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'it should add a city card with the correct weather details when the a search is success': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.container')
      .assert.containsText('h2', 'Weather details all around you!')
      .waitForElementVisible('.form__input', 500)
      .click('.form__input')
      .setValue('input[name="search"]', 'london')
      .click('#search')
      .waitForElementVisible('.card--wrapper', 5000)
      .waitForElementVisible('.card--wrapper > .card', 5000)
      .assert.containsText('.card p:first-child', 'London, GB')
      .end()
  },
  'it displays an error message when a user enters a nonexistent city': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.form__input', 500)
      .click('.form__input')
      .setValue('input[name="search"]', 'londonasfws')
      .click('#search')
      .waitForElementVisible('.error', 5000)
      .assert.containsText('.error', 'oops... could not find a city with that name. Try another?')
      .end()
  },
  'it should delete a weather card when a user clicks the delete button ': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .click('.form__input')
      .setValue('input[name="search"]', 'london')
      .click('#search')
      .waitForElementVisible('.card:first-child', 5000)
      .assert.containsText('.card p:first-child', 'London, GB')
      .setValue('input[name="search"]', 'new york')
      .click('#search')
      .waitForElementVisible('.card:nth-child(2)', 5000)
      .assert.containsText('.card:nth-child(2) p:first-child', 'New York, US')
      .setValue('input[name="search"]', 'rome')
      .click('#search')
      .waitForElementVisible('.card:nth-child(3)', 5000)
      .assert.containsText('.card:nth-child(3) p:first-child', 'Rome, IT')
      .click('.card:nth-child(3) #delete')
      .assert.elementNotPresent('.card:nth-child(3)')
      .pause(10000)
      .end()
  }
}
