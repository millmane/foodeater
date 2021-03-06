var UserStore = require('../stores/user_store.js');
var UserActions = require('../actions/user_actions.js');

var CurrentUserState = {

  getInitialState: function (){
    return {
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    };
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function (){
    this.userListener.remove();
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  }
};

module.exports = CurrentUserState;
