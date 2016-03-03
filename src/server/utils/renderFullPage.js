module.exports = function(html, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Hello World</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
        <script src="/build/static/vendor.js"></script>
        <script src="/build/static/main.js"></script>
      </body>
    </html>
  `
}
