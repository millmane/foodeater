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
    UserStore.addListener(this.updateUser);
    if (typeof UserStore.currentUser() === 'undefined') {
      UserActions.fetchCurrentUser();
    }
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  }
};

module.exports = CurrentUserState;
