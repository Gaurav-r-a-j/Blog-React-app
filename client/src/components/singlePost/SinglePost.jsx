import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./singlePost.css"

const SinglePost = () => {


    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5500/images/"
    const { user } = useContext(Context)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user?.username }
            })
            window.location.replace("/");
        } catch (err) {
            console.log(err)

        }
    }



    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user?.username, title, desc
            })
            setUpdateMode(false)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    (<img
                        className='singlePostImg'
                        src={PF + post.photo} alt="" />)
                }

                {
                    updateMode ?
                        (<input
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                            className='singlePostTitleInput' type="text" value={title} />) : (


                            <h1 className="singlePostTitle">
                                {title}

                                {post.username === user?.username &&
                                    (<div className="singlePostEdit">
                                        <i
                                            onClick={() => setUpdateMode(true)}
                                            className="singlePostIcon fa-regular fa-pen-to-square"></i>
                                        <i
                                            onClick={handleDelete}
                                            className="singlePostIcon fa-solid fa-trash"></i>
                                    </div>)
                                }

                            </h1>
                        )
                }

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author:
                        <Link to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode ?
                    (<textarea
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        className='singlePostDescInput' />) :
                    (<p className='singlePostDesc'>
                        {desc}
                    </p>)
                }

               { updateMode &&( <button
                    onClick={handleUpdate}
                    className="singlePostButton">
                    Update
                </button>)}
            </div>
        </div>
    )
}

export default SinglePost