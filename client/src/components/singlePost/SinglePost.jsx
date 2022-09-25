import React from 'react'
import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg" />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Gaurav</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>

                <p className='singlePostDesc'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem harum delectus asperiores consequuntur non repellat voluptatibus, veritatis ad ullam quis similique fuga beatae, incidunt suscipit minima, nihil aut? Distinctio, fugiat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias dignissimos voluptate. Animi, sunt laudantium! Fugit voluptate deleniti sapiente libero possimus ex delectus officiis magnam maxime! Dicta praesentium necessitatibus quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro dolores quibusdam adipisci numquam iure, nisi laudantium nobis velit ipsum perferendis enim, rem maiores quas quasi, facilis possimus eveniet quae?.lorem
                </p>
            </div>
        </div>
    )
}

export default SinglePost