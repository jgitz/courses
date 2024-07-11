for ( let i= 1; i<4; i++) {
  console.log(`<<<<<<<<<< MAIN LOOP ${i} >>>>>>>>>>>>>>>>>
  `)

  for (let j= 1; j<5; j++) {
    console.log(`<<<<<< SUB LOOP ${i} >>>>>>>
    `)
  }
}

/* o/p
<<<<<<<<<< MAIN LOOP 1 >>>>>>>>>>>>>>>>>

<<<<<< SUB LOOP 1 >>>>>>>

<<<<<< SUB LOOP 1 >>>>>>>

<<<<<< SUB LOOP 1 >>>>>>>

<<<<<< SUB LOOP 1 >>>>>>>

<<<<<<<<<< MAIN LOOP 2 >>>>>>>>>>>>>>>>>

<<<<<< SUB LOOP 2 >>>>>>>

<<<<<< SUB LOOP 2 >>>>>>>

<<<<<< SUB LOOP 2 >>>>>>>

<<<<<< SUB LOOP 2 >>>>>>>

<<<<<<<<<< MAIN LOOP 3 >>>>>>>>>>>>>>>>>

<<<<<< SUB LOOP 3 >>>>>>>

<<<<<< SUB LOOP 3 >>>>>>>

<<<<<< SUB LOOP 3 >>>>>>>

<<<<<< SUB LOOP 3 >>>>>>>
*/