const moment = require('moment');

const helpers = {
  formatDate: function(date) {
    return moment(date).format('M/D/YYYY');
  },
  eq: function(a, b) {
    return a === b;
  },
  formatTimeAgo: function(date) {
    return moment(date).fromNow();
  },

  formatDateTime:function(date) {
    return moment(date).format('M/D/YYYY h:mm A');
  },

};

module.exports = helpers;
