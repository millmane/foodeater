var React = require('react');

var LandingPage = React.createClass({

// big search bar, background image
  render: function(){
    return(
      <div className="hero-unit">
        <div className="hero-background">
          <img className="landing-background"
            src="http://res.cloudinary.com/millmane/image/upload/v1461805273/sushi1_kj1omy.jpg"/>
        </div>
        <div>
          BigSearchBar Here
        </div>
      </div>
    );
  }

});

module.exports = LandingPage;


// <video preload="auto" loop="loop" id="sushi-video" class="video-playing">

// <div align="center" class="embed-responsive embed-responsive-16by9">
//     <video autoplay loop class="embed-responsive-item">
//         <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
//     </video>
// </div>
// <div className="hero shift_with_hiw js-hero">
//   <div className="hero-background">
//     <video autoplay loop muted id="sushi-video" class="video-playing">
//       <source src="https://youtu.be/G2edsT-HCjE" type="video/mp4"/>
//     </video>
//   </div>
// </div>
