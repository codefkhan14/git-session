import React from 'react'
import '../styles/AdminSearch.css'
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
const AdminSearch = () => {
  return (
    <div className="search-top-bar">
    <div className="top-search-bar">
      <div className="top-search-icon">
        <i>
          <GoSearch />
        </i>
      </div>
      <input
        type="text"
        placeholder="Search for name, email, mobial number"
      />
    </div>

    <div className="top-search-icon">
      <i>
        <BsBell />
      </i>
    </div>
  </div>
  )
}

export default AdminSearch
