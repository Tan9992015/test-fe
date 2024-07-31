import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function App() {
  const [currentPage,setCurrentPage] = useState(1)
  const [users, setUsers] = useState([]);
  const fetchdata = async(page)=> {
    const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`)
    return response.data.results
  }
  const handlePageClick = (event) => {
    console.log('event', event)
    setCurrentPage(event.selected + 1)
    getUsersData(event.selected + 1)
  }
  const getUsersData = async (page) => {
    const data = await fetchdata(page)
    setUsers(data)
  }
  useEffect(() => {
    getUsersData()
  }, [])
  // console.log('user',users)
  // console.log('user Name',users[0])
  // console.log(currentPage)

 

  return (
    <div className='items-center'>
      <div className='userDetail rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-md w-[80%] mb-8'>
        <h4 className='mb-6 text-xl font-bold text-black'>User Details</h4>

        <table className='w-full'>
          <thead className='border-b border-gray-200 '>
            <tr>
              <th className='text-left'>Number</th>
              <th className='text-left'>Full Name</th>
              <th className='text-left'>User Name</th>
              <th className='text-left'>Avatar</th>
            </tr>
          </thead>
          <tbody>
            { 
              users.map((user, index) => (
              <tr className='border-b border-gray-200 text-slate-700 py-2' key={index}>
                <td className='text-left'>{(currentPage-1)* 10 + index+ 1}</td>
                <td className='text-left'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                <td className='text-left'>{user.login.username}</td>
                <td className='text-left'>
                  <img className=' rounded' src={user.picture.thumbnail} alt='Avatar' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={100}
        previousLabel="< previous"

        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </div>
  );
}


export default App;
