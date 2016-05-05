var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions.js');
var ListingDetailCarousel = require('./ListingDetailCarousel.jsx');


var ListingDetail = React.createClass({

  getStateFromStore: function (){
    return (
      {
        listing: ListingStore.findListing(parseInt(this.props.params.listing_id))
      }
    );
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },


  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  handleClick: function() {
    var listing_id = this.props.listing.id;
    hashHistory.push("/listings/" + listing_id);
  },
  render: function(){

    var listing = this.state.listing;
    if (typeof listing !== 'undefined'){
      return (
        <div>
          <ListingDetailCarousel listing={listing}/>
        </div>
      );
    } else {
      return <div>listing didnt load yet</div>;
    }
  }
});

module.exports = ListingDetail;

//
// <div id="listing">
//   <div data-mystique-key="p3hero_and_slideshowbundlejs">
//     <div data-reactid=".1jffvpofqio" data-react-checksum="-1828275119">
//       <div id="photos" className="with-photos with-modal" data-reactid=".1jffvpofqio.0">
//         <span className="cover-photo" data-reactid=".1jffvpofqio.0.0">
//           <img className="hide" alt="" width="0" src="https://a1.muscache.com/im/pictures/16020454/ca70e301_original.jpg?aki_policy=large" srcset="https://a1.muscache.com/im/pictures/16020454/ca70e301_original.jpg?aki_policy=large 639w,https://a1.muscache.com/im/pictures/16020454/ca70e301_original.jpg?aki_policy=xx_large 1440w" data-reactid=".1jffvpofqio.0.0.0"/>
//           <span className="cover-img-container" data-hook="cover-img-container" data-reactid=".1jffvpofqio.0.0.1">
//             <div className="cover-img" style={{backgroundImage:"url(https://a1.muscache.com/im/pictures/16020454/ca70e301_original.jpg?aki_policy=xx_large)"}} data-reactid=".1jffvpofqio.0.0.1.0">
//               <div className="link-reset panel-overlay-bottom-left panel-overlay-label panel-overlay-listing-label show-sm" data-reactid=".1jffvpofqio.0.0.1.0.0">
//                 <div data-reactid=".1jffvpofqio.0.0.1.0.0.0">
//                   <span className="h3 text-contrast price-amount" data-reactid=".1jffvpofqio.0.0.1.0.0.0.0">
//                     <span data-reactid=".1jffvpofqio.0.0.1.0.0.0.0.0">$112</span>
//                   </span>
//                   <span data-reactid=".1jffvpofqio.0.0.1.0.0.0.1">&nbsp;</span>
//                     <span className="per-night hide-sm" data-reactid=".1jffvpofqio.0.0.1.0.0.0.2">
//                     <span data-reactid=".1jffvpofqio.0.0.1.0.0.0.2.0">Per Night</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </span>
//           <div className="slideshow-inline-preload hide" data-reactid=".1jffvpofqio.0.0.2">
//             <img className="carousel-image img-responsive-height" src="https://a0.muscache.com/im/pictures/16020349/2b864bbc_original.jpg?aki_policy=x_large" alt="" data-reactid=".1jffvpofqio.0.0.2.$https=2//a0=1muscache=1com/im/pictures/16020349/2b864bbc_original=1jpg?aki_policy=0x_large"/>
//             <img className="carousel-image img-responsive-height" src="https://a1.muscache.com/im/pictures/16020376/b53ea354_original.jpg?aki_policy=x_large" alt="" data-reactid=".1jffvpofqio.0.0.2.$https=2//a1=1muscache=1com/im/pictures/16020376/b53ea354_original=1jpg?aki_policy=0x_large"/>
//           </div>
//         </span>
//       </div>
//     <noscript data-reactid=".1jffvpofqio.1"></noscript>
//     </div>
//   </div>
// </div>