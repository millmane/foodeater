var React = require('react');

var Search = React.createClass({


  getInitialState: function(){
    return {
      listings: {},
      filterParams: {},
      clickedLoc: null,
    };
  },

  render: function(){
    return(
      <div class="input-group">
        <input type="text" className="form-control"
           placeholder="Recipient's username" aria-describedby="basic-addon2"/>
        <span className="input-group-addon" id="basic-addon2">@example.com</span>
      </div>
    );
  }
});

module.exports = Search;
