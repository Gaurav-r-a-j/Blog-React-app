import React from 'react'
import "./post.css"
const Post = () => {
    return (
        <div className="post">
            <img
                className='postImage'
                src="https://images.pexels.com/photos/2387415/pexels-photo-2387415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit.
                </span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
            </div>

            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident non, et unde, quam consectetur praesentium eligendi nemo voluptate tempore similique qui soluta necessitatibus, possimus natus cupiditate sed! Maxime, animi dolorum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, sequi modi. Velit et quasi, eum doloribus quisquam modi eveniet culpa molestiae repudiandae magnam exercitationem quos sed mollitia quo reprehenderit minima?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores inventore tenetur ullam natus quo dicta, porro at vero! Nemo exercitationem cupiditate dignissimos deleniti doloremque mollitia soluta repellendus est esse tempora Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis corrupti laboriosam illo, soluta debitis sint animi officiis? Dolorum, dignissimos tempore ducimus nam vel rem, ipsam neque excepturi atque repellat iste.
            </p>
        </div>
    )
}

export default Post