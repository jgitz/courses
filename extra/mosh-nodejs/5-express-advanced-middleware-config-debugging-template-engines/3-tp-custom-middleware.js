/* 
custom middleware syntax

  app.use((req, res, next) => {
    codes

    next()
  })

    ** middleware functions i.e the lines starting with app.us executes in order which they are written

    ** if no next() is provided at the end of the custom middleware.... the app won't work

    eg..
*/

app.use(express.json()) /* inbuilt middleware */

app.use((req, res, next) => {
  console.log("logging....")
  next()
}) // this middleware displays logging.... string in console

app.use ((req, res, next) => {
  console.log("authenticating....")
  next()
}) // this displays string ..... authenticating after string logging....

 // ** the next() code inside the last middleware will handle the request to request handlers


 // ** for clean coding practices, the middleware functios are stored is separate js files and are default exported.... then they are used inside app.use in index.js as variables
