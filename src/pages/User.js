import React from "react";
import "./User.css";
import Video from './video/video.mp4'

function User() {
return(
  <>
<div className="video-background">
<div className="overlay"></div>
<video playsInline autoPlay muted="muted" loop="loop" src={Video} type="video/mp4"/>
<div className="container h-100">
  <div className="d-flex h-100 text-center align-items-center">
    <div className="w-100 text-white">
      <h1 className="display-3">Laman User</h1>
      <p className="lead mb-0">Selamat Menikmati Filmnya</p>
    </div>
  </div>
</div>
</div>
<div className="user-page">
<h2>Laman User</h2>
<h3>Selamat Menikmati Filmnya</h3>


</div>
</>




)
}

export default User;