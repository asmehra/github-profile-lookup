'use client'

import React, { useState, useEffect, useMemo } from "react";
import { FaUser, FaBuilding, FaSpinner, FaSearch, FaChevronLeft, FaChevronRight, FaAngleDoubleDown } from 'react-icons/fa';
import { FaAnglesDown } from "react-icons/fa6";

function FormSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedText, setSearchedText] = useState("");
    const [users, setUsers] = useState();
    const [totalUsers, setTotalUsers] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    // const memoizedParams = useMemo(() => ({
    //     searchQuery,
    //     currentPage,
    //     perPage
    // }), [searchQuery, currentPage, perPage]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            githubSearchUserApi();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [currentPage, perPage]);

    useEffect(() => {
        // Scroll to the div when data is available and component is updated
        if (users && !loading) {
            const targetDiv = document.getElementById('user-profile-container');
            if (targetDiv) {
                targetDiv.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [users]);

    const githubSearchUserApi = () => {
        if(searchQuery) {
            fetch(`https://api.github.com/search/users?per_page=${perPage}&page=${currentPage}&q=${searchQuery}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setUsers(data.items);
                    setTotalUsers(data.total_count);
                    setLoading(false);
                })
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchQuery)
            return;
        setLoading(true);
        setCurrentPage(1)
        setUsers();
        setSearchedText(searchQuery);
        githubSearchUserApi();
    }
    
    const paginate = (direction) => {
        // setLoading(true);
        if (direction === 'prev') {
            setCurrentPage(prevPage => prevPage - 1);
        } else if (direction === 'next') {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <>
            <div className="container mx-auto p-24">
                <h1 className="text-4xl font-bold mb-2 text-center">Explore GitHub User Profiles</h1>
                <p className="text-lg text-gray-400 mb-8 text-center">Search for user profiles by name</p>

                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center">
                        <form className="flex items-center">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search by name"
                                className="px-4 py-3 me-2 w-80 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:bg-gray-700"
                            />
                            <button onClick={handleSearch} className="px-6 py-3 bg-sky-700 dark:bg-sky-700 hover:bg-sky-800 text-white rounded-lg flex items-center justify-center">
                                <FaSearch className="mr-2" />
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                {users && users.length > 0 &&
                    <FaAnglesDown className="text-center mx-auto text-4xl animate-bounce"/>
                }
            </div>

            {loading &&
                <div className="flex justify-center items-top h-screen">
                    <FaSpinner className="animate-spin text-4xl" />
                </div>
            }
            {users && users.length === 0 &&
                <p className="text-center text-gray-400 mb-14">No user found.</p>
            } 
            {searchQuery && users && users.length > 0 && 
                <div className="container mx-auto" id="user-profile-container">
                    <div className="text-white px-8 sm:px-0 lg:px-0">
                        <h1 className="text-3xl font-bold mb-4 text-center pt-4">User Profiles</h1>
                        <p className="text-gray-400 text-center mb-8">
                            Found <span className="font-bold">{totalUsers}</span> results for <span className="font-bold">{searchedText}</span> 
                            <span> | </span>
                            Page no. <span className="font-bold">{currentPage}</span>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                users.map((user, key) => {
                                    return (
                                        <a key={key} href={user.html_url} target="_blank" className="bg-gray-800 rounded-lg shadow-md p-6 block text-center">
                                            <img src={user.avatar_url} alt="Profile Picture" className="rounded-full w-20 h-20 mx-auto mb-4" />
                                            <h2 className="text-xl font-semibold break-all">{user.login}</h2>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 mb-20">
                        <button onClick={() => paginate('prev')} disabled={currentPage === 1} className={`px-6 py-3 rounded-lg flex items-center justify-center me-2 w-1/6 ${currentPage === 1 ? 'bg-gray-400 text-gray-700' : 'bg-sky-700 dark:bg-sky-700 hover:bg-sky-800 text-white'}`}>
                            {loading ?
                                <FaSpinner className="animate-spin mr-2" />
                                :
                                <FaChevronLeft className="mr-2" />
                            }
                            Previous
                        </button>
                        <button onClick={() => paginate('next')} disabled={users & users.length < perPage}  className={`px-6 py-3 rounded-lg flex items-center justify-center w-1/6 ${users & users.length < perPage ? 'bg-gray-400 text-gray-700' : 'bg-sky-700 dark:bg-sky-700 hover:bg-sky-800 text-white'}`}>
                            Next
                            {loading ? 
                                <FaSpinner className="animate-spin ml-2" />
                                :
                                <FaChevronRight className="ml-2" />
                            }
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default FormSection;