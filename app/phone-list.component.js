angular.
  module('phonecatApp').
  component('phoneList', { 
    templateUrl:'template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nokia',
          snippet: 'Fast just got faster with Nexus S.',
          age:2
        }, 
        {
          name:'phone',
          snippet: 'The Next, Next Generation tablet.',
          age:1
        }, 
        {
          name: 'Pixel',
          snippet: 'The Next, Next Generation tablet.',
          age:3
        }
      ];
      this.orderProp='age';
    }
  });