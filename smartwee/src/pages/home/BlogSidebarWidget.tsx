import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebarWidget = ({img_blog,sidebar_post_title, datepost}) => {
   return (
      <>
         <div className="sidebar--widget__post mb-20">
            <div className="sidebar__post--thumb">
               <Link to="/home">
                  <div className="post__img">
                     <img src={img_blog} alt="" />
                  </div>
               </Link>
            </div>
            <div className="sidebar__post--text">
               <h4 className="sidebar__post--title">
                  <Link to="/home">{sidebar_post_title}</Link></h4>
               <span>{datepost}</span>
            </div>
         </div>
      </>
   );
};

export default BlogSidebarWidget;