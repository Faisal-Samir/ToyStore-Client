import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const Blog = () => {

    UseTitle("Blogs");
    return (
        <div>
            <h1 className='text-center mt-5 mb-2 text-5xl font-semibold'>Blogs</h1>
            <div className='grid grid-cols-2 mt-10 mb-10 w-5/6 mx-auto gap-5'>
                <div className=' px-8 shadow-xl py-10'>
                    <div>
                        <h1 className='text-2xl font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    </div>
                    <div className='mt-3'>
                        <p className='text-lg text-justify'>An access token and a refresh token are  used in authentication and authorization system, like  <span className='text-orange-600 font-bold text-xl'>OAuth</span>, to get secure access to resources of a user or client application. After a user's authentication is successful, an authentication server will provide a credential called an access token. Apart from the access token, the authentication server will also issue a refresh token, which is a temporary credential. Its goal is to gain a fresh access token without asking the user to re-authenticate. The client application makes a request to the authentication server using the proper credentials (such as a username and password) or by using another authentication process.
                            The server responds with an access token and a refresh token if the authentication is successful.When the access token expires, the client application can use the refresh token to ask the web server for a new access token without requesting the user's credentials once more.
                            The server checks the refresh token's reliability and, if it is, sends the client a new access token. </p>
                    </div>
                </div>

                <div className=' px-8 shadow-xl py-10'>
                    <div>
                        <h1 className='text-2xl font-bold'>Compare SQL and NoSQL databases?</h1>
                    </div>
                    <div>
                        <p className='text-lg mt-3'>In the SQL database, we need to write a query. According to the query data store from client side to server side, in the No-SQL database there is no need to write any query. By writing or creating routes or using the get, post, patch, put, and delete methods, we can do the same thing in an easy way.</p>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-2xl font-bold'>What is express js? What is Nest JS</h1>
                    </div>
                    <div>
                        <p className='text-lg mt-3'>Express.js is a popular and efficient Node.js web application framework that was created to make the process of developing web application and APIs easier. NestJS is a framework for building scalable and efficient server-side applications with Node.js It is designed to provide a robust structure for developing server-side applications using TypeScript, modern JavaScript features and concepts,like as decorators, injection and object-oriented programming concepts. </p>
                    </div>
                </div>

                <div className=' px-8 shadow-xl py-10'>
                    <div>
                        <h1 className='text-2xl font-bold'>What is MongoDB aggregate and how does it work</h1>
                    </div>
                    <div>
                        <p className='text-lg mt-3'>The MongoDB aggregate function is an effective tool that enables you to perform complex data processing and analysis operations on collections of documents stored in MongoDB. Filters the documents based on specified query.  Sorts the documents based on specified query. Limits the number of documents in the output.  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;