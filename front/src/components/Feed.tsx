import React from 'react';
import './styles/Feed.css';
import './styles/Contact.css';
const Feed: React.FC = () => {
  return (
    <div className='text-center'>
      <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      <iframe
        title="Facebook Page Plugin"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61550596620253&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="600"
        style={{ border: 'none', overflow: 'hidden', margin:'25px'}}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default Feed;
