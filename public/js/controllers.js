'use strict';

/* Controllers */

function AppCtrl($scope, socket) {
  socket.on('send:name', function (data) {
    $scope.name = data.name;
  });
}

function MyCtrl1($scope, socket) {
  socket.on('send:time', function (data) {
    $scope.time = data.time;
  });
}
MyCtrl1.$inject = ['$scope', 'socket'];


function MyCtrl2($scope) {
    $scope.sayhi = function () {
      // alert('hi');
     console.log('in')
    };

}
MyCtrl2.$inject = ['$scope'];


function FaqCtrl($scope) {

    $scope.usstates = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
        'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
        'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
        'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
        'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI',
        'WY'   ];


    $scope.groups = [
        { title:"Is your site secure?", content:"Yes!  Our site is protected with 256 bit SSL encryption.  Your information is safely protected with us.", isOpen:false }
        //   { title:"What happens when I have an accident with a town vehicle?", content:"you ask jen what to do", isOpen:false }
        //,{title:'Test3',content: '-1ajssd hkjashd kjas hdkjashd kjashd ,/n/r-2ajssd hkjashd kjas hdkjashd kjashd1ajssd hkjashd kjas hdkjashd kjashd ,/n/r-2ajssd hkjashd kjas hdkjashd k1ajssd hkjashd kjas hdkjashd kjashd ,/n/r-2ajssd hkjashd kjas hdkjashd k'     , isOpen:true }
    ];

    $scope.oneAtATime = false;

    $scope.groups = [
        {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        $scope.items.push('Item ' + $scope.items.length);
    };
//    $scope.open = function () {
//        $scope.shouldBeOpen = true;
//    };
//
//    $scope.close = function () {
//        $scope.closeMsg = 'I was closed at: ' + new Date();
//        $scope.shouldBeOpen = false;
    //  };


}


function Select2Ctrl($scope ,$timeout) {
    $scope.types = ['Automated', 'Functionality', 'Other', 'Performance', 'Regression', 'Usability'];
    $timeout( function() {
        $scope.value = $scope.types[0];
    }, 1000);

    $timeout( function() {
        $scope.value2 = $scope.types[0];
    }, 1);
console.log( $scope.types )
    $scope.usstates = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
        'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
        'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
        'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
        'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI',
        'WY'   ];
    var scope = this;
    scope.items = [
        { name: 'first', val: 1 },
        { name: 'two', val: 2 },
        { name: 'three', val: 3 }
    ];
    scope.item = 2;
    setTimeout(function(){
        $scope.$apply('timeout = true');
    }, 500);

    $scope.selectedValue = '1';
    $scope.selectedValue2 = $scope.selectedValue;
    $scope.data = [ { "id":"1",
        "name":"Jay" },
        { "id":"2",
            "name":"John" },
        { "id":"3",
            "name":"Mike" } ];


}