/* 

- INSERT ADJACENT HTML METHOD: to insert a set of child html tags into a parent html element tag use DOM METHOD insertAdjacent like this

    const <child_html_content_variable> = `<>
      html content tags and data you want to insert
     <>  
    `

    <querySelectParent>.insertAdjacentHTML(<afterbegin>, <child_html_content_variable>)

        ** other values in place of after begin are

            - before begin
            - before end
            - after end


*/