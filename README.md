# Implementation steps 
## Step 1: get data by using axios
!['alt](/public/fetchdata.png)
- when mounted app useEffect is runing call to getUserData()
- getUserData() got a parameter is page
- page parameter is passed from handlePageClick to getUserData
- handlePageClick() is a function provided by ReactPagetinate it return the number of the the page we click 
- getUserData() passed page to fetchdata()
- fetchData() use page parameter to get data from api, it returns 10 user with the page that user want to see 
- using useState hook to mange user data, we set user  by the data was returned by fetchData(), it is an array
## Step 2: render user infomation 
!['alt](/public/renderdata.png)
- after got array user from api we using map method to render data 

## Some framework and library was used:
- taidlwindcss
- Reactpaginate
