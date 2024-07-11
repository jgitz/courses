/* 

to get data from the tmdb api site..... we have many URLs of the site.... the BASE url is common in these sites........ so to prevent DRY by typing base url again and again..... do this

..... inside api files folder.... make a js file named BASE_URL.js......

..... inside base_url.js.... import axios from "axios"

..... COPY base URL from the API_DATA text file.....

..... inside base_url.js..... make a variable named base_url_axios_object.... and use axios.CREATE({}) inside the variable.... and inside the {} PASTE the copied BASE URL as object....

                                        const base_url_axios_object = axios.create({
                    baseURL:"https://api.themoviedb.org/3"
                })

..... export default the variable....

..... now instead of typing base url again and again..... we can use BASE_URL_AXIOS_OBJECT.get/post/or any axios crud operations....
*/