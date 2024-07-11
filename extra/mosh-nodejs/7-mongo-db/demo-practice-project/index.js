const mongoose = require('mongoose'); /* 4.1 */

// mongoose.connect("mongodb://localhost:27017/moshPractice").then(() => console.log('connected to mongoDb')).catch(err => console.log('connetion unsuccessful', err)); /* 4.1 ***** error: replace  localhost with 127.0.0.1.... else won't connect to mongodb  */

mongoose.connect("mongodb://127.0.0.1:27017/mosh-practice").then(() => console.log('connected to mongoDb')).catch(err => console.log('connetion unsuccessful', err)); /* 4.1 */

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  gender: String,
  isAdmitted: Boolean
}) /* 5 */

const Student = mongoose.model('Student', studentSchema) /* 6 */

async function createStudent(document_object) {
  const student = new Student(document_object); /* 6 */

  data = await student.save() /* 7 **** student here is the document variable and NOT the Model variable */

  console.log(data)
}

// createStudent({"name":"Emmanuel Joseph", "rollNo": 1 , "gender":"male", "isAdmitted": true})

// createStudent({"name":"Teddy Thomas", "rollNo": 2 , "gender":"female", "isAdmitted": true})

// createStudent({"name":"Jerry Joseph", "rollNo": 3 , "gender":"male", "isAdmitted": false})

// createStudent({"name":"Flem Thomas", "rollNo": 4 , "gender":"male", "isAdmitted": false})

/* ***** above 4 codes commented after creation of documents..... if not commented.... new data is created everytime we run the nod app */

// ***** find method

async function findMethod() {
  const data = await Student.find() /* ***** returns all documents from the collection students */
  console.log(data)
} /* 8 */ 

findMethod() /* 8 */ /* 
output: 

[
  {
    _id: new ObjectId("6327558a0c85bd3614b748fa"),
    name: 'Emmanuel Joseph',
    rollNo: 1,
    gender: 'male',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b027"),
    name: 'Flem Thomas',
    rollNo: 4,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b025"),
    name: 'Teddy Thomas',
    rollNo: 2,
    gender: 'female',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b026"),
    name: 'Jerry Joseph',
    rollNo: 3,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }
]

*/

// 8 ***** find limit method 

async function findLimitMethod() {
  const data = await Student.find()
                      .limit(2) /* **** returns only the first 2 documents from the collection students */
  console.log("findLimit", data)
} /* 8 */

findLimitMethod() /* 8 */ /* o/p 

[
  {
    _id: new ObjectId("6327558a0c85bd3614b748fa"),
    name: 'Emmanuel Joseph',
    rollNo: 1,
    gender: 'male',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b027"),
    name: 'Flem Thomas',
    rollNo: 4,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }

*/

// 8 **** find skip: to skip n number of documents from the start and display the rest 

async function findSkip() {
  const data = await Student.find()
              .skip(2) /* **** skips 2 documents from the start */
  console.log("findSkip", data)
} /* 8 */

findSkip() /* o/p **** last two documents is displayed without displaying the first two documents

[
  {
    _id: new ObjectId("632756c5894fff31db09b025"),
    name: 'Teddy Thomas',
    rollNo: 2,
    gender: 'female',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b026"),
    name: 'Jerry Joseph',
    rollNo: 3,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }
]

*/ /* 8 */

// 8 ***** find select: selects the specific fields from the object 

async function findSelect() {
  const data = await Student.find()
                .select({name:1, rollNo:1, _id: 0}) /* ***** _id gets displayed by default.... so always set it to zero to not display it */

  console.log('findSelect', data)
} /* 8 */

findSelect() /* 8 */ /* o/p 

 [
  { name: 'Emmanuel Joseph', rollNo: 1 },
  { name: 'Flem Thomas', rollNo: 4 },
  { name: 'Teddy Thomas', rollNo: 2 },
  { name: 'Jerry Joseph', rollNo: 3 }
]

*/

// 8 ***** find sort: is used to sort the documents according to the field in alphabetical or numbercal order 

async function findSort() {
  const data = await Student.find().sort({rollNo: 1}) /* ***** 1 to sort in ascending order.... and -1 to sort in descending order */

  console.log("findSort", data)
} /* 8 */ 

findSort() /* 8 */ /* o/p ***** sorted in ascending order of the roll number

[
  {
    _id: new ObjectId("6327558a0c85bd3614b748fa"),
    name: 'Emmanuel Joseph',
    rollNo: 1,
    gender: 'male',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b025"),
    name: 'Teddy Thomas',
    rollNo: 2,
    gender: 'female',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b026"),
    name: 'Jerry Joseph',
    rollNo: 3,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b027"),
    name: 'Flem Thomas',
    rollNo: 4,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }
]

*/

// 9 ***** comparison operators 

async function greaterLess() {
  const data = await Student.find({rollNo: {$gt: 1, $lt: 4}}) /* **** lists all document with roll number greater then 1 and less than 4 */

  console.log("greaterLess", data)
} /* 9 */

greaterLess() /* 9 o/p **** lists roll numbers documents of 2 and 3

[
  {
    _id: new ObjectId("632756c5894fff31db09b025"),
    name: 'Teddy Thomas',
    rollNo: 2,
    gender: 'female',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b026"),
    name: 'Jerry Joseph',
    rollNo: 3,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }
]

*/

// 9 comparison operator find nin (not in )

async function nin() {
  const data = await Student.find({rollNo: {$nin: [2, 3]}}) /* **** ommits the documents with roll number 2 OR 3 */

  console.log("nin", data)
} /* 9 */

nin() /* 9 o/p ***** displays results omitting roll numbers 2 and 3

 [
  {
    _id: new ObjectId("6327558a0c85bd3614b748fa"),
    name: 'Emmanuel Joseph',
    rollNo: 1,
    gender: 'male',
    isAdmitted: true,
    __v: 0
  },
  {
    _id: new ObjectId("632756c5894fff31db09b027"),
    name: 'Flem Thomas',
    rollNo: 4,
    gender: 'male',
    isAdmitted: false,
    __v: 0
  }

*/




