angular.
  module('phonecatApp').
  component('phoneList', { 
    templateUrl:'template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nokia',
          snippet: 'Fast just got faster with Nexus S.'
        }, 
        {
          name:'Iphone',
          snippet: 'The Next, Next Generation tablet.'
        }, 
        {
          name: 'Pixel',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });