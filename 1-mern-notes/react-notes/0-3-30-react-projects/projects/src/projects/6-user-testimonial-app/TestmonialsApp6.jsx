import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'

function TestmonialsApp6() {

  // endpoint variable

  const [endpoint, setEndpoint] = useState()

  // api data variable 

  const [data, setData] = useState();

  // button handler 

  useEffect(() => {

    async function getApiData() {

      await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(response => response.json())
        .then(json => setData(json)).catch(() => console.log(error))

      console.log(endpoint)
      console.log(data)
    }

    getApiData()


  }, [endpoint]);



  return (
    <div>
      <Title text={"Testimonials App"} classes="subtitle text-center" />

      <Button buttonText={"Posts"} onClickProp={() => setEndpoint("Posts")} />

      <Button buttonText={"Users"} onClickProp={() => setEndpoint("Users")} />

      <Button buttonText={"Comments"} onClickProp={() => setEndpoint("Comments")} />

      <h2 className='text-primary'>{!endpoint ? "click the buttons" : endpoint}</h2>




      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", margin: "0 auto", }}>
        {
          /*  ***** Array.isArray() used because... api is returning an object instead of array in the first click.... don't know why.... this method rectifys it  */
          !Array.isArray(data) ? null
            : data.map((d) => {
              return (

                <div style={{ backgroundColor: "#CDAA4F", maxWidth: "500px", margin: "2px", border: "7px solid #55380C", borderRadius: "10px" }}>

                  <div>

                    <h3 style={{ border: "2px solid white", color: "#55380C", textAlign: "center", borderRadius: "10px", padding: "10px" }}>{d.id} &#41; {d.title || d.name}</h3>

                    <article style={{ color: "#55380C", textAlign: "center", padding:"4px" }}>{d.body}</article>

                    { d.email && <small style={{ color: "#55380C", paddingLeft: "4px" }}>Email: {d.email} </small>}
                  </div>

                </div>

              )
            })

        }
      </div>












    </div>
  )
}

export default TestmonialsApp6