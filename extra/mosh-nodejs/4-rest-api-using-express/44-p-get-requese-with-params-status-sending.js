/* 
configure the route code to find a specific course and display its param contents
*/

const courses = [
  { id: 1, name: "course1"},
  { id: 2, name: "course1"},
  { id: 3, name: "course1"},
  
]

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(d => d.id === parseInt(req.params.id))

  if (course) res.status(200).send(course)

  if (!course) res.status(404).send("course not found")
})

/* 
** always parseInt() the number content coming from the client.... as the data from client will always be strings
*/
