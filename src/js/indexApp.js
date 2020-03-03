var app = angular.module('app', ['ngRoute'])
app.service('commonService', function () {
  var palyingEleven = [];
  var selectedPlayerCount = 0;
  var creditScoreLeft = 100;
  var selectedPlayerArr = [];
  var selectedcaption, vselecteicecaption;
  var data = { "players": [{ "id": 267, "name": "Jos Buttler", "value": "9.5", "style": 5, "last_series_score": 380, "display_name": "J. Buttler", "display_info": "\u003cb\u003e9.5 Cr\u003c/b\u003e\u003cbr\u003eBAT/WK", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 398, "name": "Chris Woakes", "value": "9.5", "style": 11, "last_series_score": 309, "display_name": "C. Woakes", "display_info": "\u003cb\u003e9.5 Cr\u003c/b\u003e\u003cbr\u003eAL/BOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 35, "name": "Quinton de Kock", "value": "9.5", "style": 5, "last_series_score": 1375, "display_name": "Q. Kock", "display_info": "\u003cb\u003e9.5 Cr\u003c/b\u003e\u003cbr\u003eBAT/WK", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 268, "name": "Ben Stokes", "value": "9.5", "style": 9, "last_series_score": 1093, "display_name": "B. Stokes", "display_info": "\u003cb\u003e9.5 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 1684, "name": "Beuran Hendricks", "value": "9.0", "style": 13, "last_series_score": 470, "display_name": "B. Hendricks", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 262, "name": "Joe Root", "value": "9.0", "style": 1, "last_series_score": 938, "display_name": "J. Root", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 295, "name": "Adil Rashid", "value": "9.0", "style": 13, "last_series_score": 226, "display_name": "A. Rashid", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 270, "name": "Chris Jordan", "value": "9.0", "style": 11, "last_series_score": 172, "display_name": "C. Jordan", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eAL/BOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 1074, "name": "Reeza Hendricks", "value": "9.0", "style": 1, "last_series_score": 98, "display_name": "R. Hendricks", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 290, "name": "Eoin Morgan", "value": "9.0", "style": 1, "last_series_score": 135, "display_name": "E. Morgan", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 1207, "name": "Tom Curran", "value": "9.0", "style": 13, "last_series_score": 135, "display_name": "T. Curran", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 296, "name": "Jason Roy", "value": "9.0", "style": 1, "last_series_score": 243, "display_name": "J. Roy", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 269, "name": "Moeen Ali", "value": "9.0", "style": 9, "last_series_score": 185, "display_name": "M. Ali", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 1077, "name": "Lungi Ngidi", "value": "9.0", "style": 13, "last_series_score": 344, "display_name": "L. Ngidi", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 304, "name": "Jonny Bairstow", "value": "9.0", "style": 5, "last_series_score": 253, "display_name": "J. Bairstow", "display_info": "\u003cb\u003e9.0 Cr\u003c/b\u003e\u003cbr\u003eBAT/WK", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 641, "name": "Tabraiz Shamsi", "value": "8.5", "style": 13, "last_series_score": 240, "display_name": "T. Shamsi", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 668, "name": "Dawid Malan", "value": "8.5", "style": 1, "last_series_score": 0, "display_name": "D. Malan", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 692, "name": "Andile Phehlukwayo", "value": "8.5", "style": 9, "last_series_score": 174, "display_name": "A. Phehlukwayo", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 1079, "name": "JJ Smuts", "value": "8.5", "style": 3, "last_series_score": 159, "display_name": "J. Smuts", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT/AL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 39, "name": "David Miller", "value": "8.5", "style": 1, "last_series_score": 232, "display_name": "D. Miller", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 2154, "name": "Joe Denly", "value": "8.5", "style": 3, "last_series_score": 719, "display_name": "J. Denly", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT/AL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 1235, "name": "Heinrich Klaasen", "value": "8.5", "style": 7, "last_series_score": 0, "display_name": "H. Klaasen", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eWK", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 1893, "name": "Sam Curran", "value": "8.5", "style": 9, "last_series_score": 616, "display_name": "S. Curran", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 45, "name": "Dale Steyn", "value": "8.5", "style": 13, "last_series_score": 69, "display_name": "D. Steyn", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 2139, "name": "Rassie van der Dussen", "value": "8.5", "style": 1, "last_series_score": 651, "display_name": "R. Dussen", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 435, "name": "Temba Bavuma", "value": "8.5", "style": 1, "last_series_score": 391, "display_name": "T. Bavuma", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 273, "name": "Mark Wood", "value": "8.5", "style": 13, "last_series_score": 728, "display_name": "M. Wood", "display_info": "\u003cb\u003e8.5 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 715, "name": "Dwaine Pretorius", "value": "8.0", "style": 9, "last_series_score": 378, "display_name": "D. Pretorius", "display_info": "\u003cb\u003e8.0 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 2257, "name": "Lutho Sipamla", "value": "8.0", "style": 13, "last_series_score": 154, "display_name": "L. Sipamla", "display_info": "\u003cb\u003e8.0 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 3022, "name": "Saqib Mahmood", "value": "7.5", "style": 11, "last_series_score": 71, "display_name": "S. Mahmood", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eAL/BOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 3023, "name": "Matthew Parkinson", "value": "7.5", "style": 11, "last_series_score": 29, "display_name": "M. Parkinson", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eAL/BOWL", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 3024, "name": "Tom Banton", "value": "7.5", "style": 7, "last_series_score": 99, "display_name": "T. Banton", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eWK", "team": { "name_attr": "ENG", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556910817/uploads/production/team/14/1556910814.png", "team_color": "#000741" } }, { "id": 3104, "name": "Kyle Verreynne", "value": "7.5", "style": 7, "last_series_score": 0, "display_name": "K. Verreynne", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eWK", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 3103, "name": "Sisanda Magala", "value": "7.5", "style": 9, "last_series_score": 0, "display_name": "S. Magala", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eAL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 3106, "name": "Petrus van Biljon", "value": "7.5", "style": 7, "last_series_score": 0, "display_name": "P. Biljon", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eWK", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 2996, "name": "Bjorn Fortuin", "value": "7.5", "style": 13, "last_series_score": 0, "display_name": "B. Fortuin", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eBOWL", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }, { "id": 2262, "name": "Janneman Malan", "value": "7.5", "style": 1, "last_series_score": 0, "display_name": "J. Malan", "display_info": "\u003cb\u003e7.5 Cr\u003c/b\u003e\u003cbr\u003eBAT", "team": { "name_attr": "SA", "jersey_photo": "https://res.cloudinary.com/fantasy/image/upload/c_fit,h_380,q_100,w_380/v1556911509/uploads/production/team/3/1556911507.png", "team_color": "#0cb000" } }] };

  return {
    getInfo: getInfo,
    setInfo: setInfo,
    returnPlayingEleven: returnPlayingEleven,
    modifyPlayingEleven: modifyPlayingEleven,
    modifyCaption: modifyCaption,
    ModifyselectedPlayerCount: ModifyselectedPlayerCount,
    getselectedPlayerCount: getselectedPlayerCount,
    ModifycreditScoreLeft: ModifycreditScoreLeft,
    getcreditScoreLeft: getcreditScoreLeft,
    ModifyselectedPlayerArr: ModifyselectedPlayerArr,
    getselectedPlayerArr: getselectedPlayerArr,
    ModifySelectedCaption: ModifySelectedCaption,
    getSelectedCaption: getSelectedCaption
  };

  // .................

  function getInfo() {
    return data;
  }

  function modifyPlayingEleven(value) {
    var index = palyingEleven.indexOf(value);
    palyingEleven.splice(index, 1);
  }

  function modifyCaption(value) {
    var index = palyingEleven.indexOf(value);
    palyingEleven[index]
  }

  function ModifyselectedPlayerArr(value, player) {
    if (value == 'dec') {
      if (player.style == 7 || player.style == 5)
        selectedPlayerArr['WK'] = -1 + (selectedPlayerArr['WK'] == undefined ? 0 : selectedPlayerArr['WK']);
      if (player.style == 1 || player.style == 3 || player.style == 5)
        selectedPlayerArr['BAT'] = -1 + (selectedPlayerArr['BAT'] == undefined ? 0 : selectedPlayerArr['BAT']);
      if (player.style == 3 || player.style == 9 || player.style == 11)
        selectedPlayerArr['AR'] = -1 + (selectedPlayerArr['AR'] == undefined ? 0 : selectedPlayerArr['AR']);
      if (player.style == 11 || player.style == 13)
        selectedPlayerArr['BOWL'] = -1 + (selectedPlayerArr['BOWL'] == undefined ? 0 : selectedPlayerArr['BOWL']);
    }
    if (value == 'inc') {
      if (player.style == 7 || player.style == 5)
        selectedPlayerArr['WK'] = 1 + (selectedPlayerArr['WK'] == undefined ? 0 : selectedPlayerArr['WK']);
      if (player.style == 1 || player.style == 3 || player.style == 5)
        selectedPlayerArr['BAT'] = 1 + (selectedPlayerArr['BAT'] == undefined ? 0 : selectedPlayerArr['BAT']);
      if (player.style == 3 || player.style == 9 || player.style == 11)
        selectedPlayerArr['AR'] = 1 + (selectedPlayerArr['AR'] == undefined ? 0 : selectedPlayerArr['AR']);
      if (player.style == 11 || player.style == 13)
        selectedPlayerArr['BOWL'] = 1 + (selectedPlayerArr['BOWL'] == undefined ? 0 : selectedPlayerArr['BOWL']);
    }
  }

  function getselectedPlayerArr() {
    return selectedPlayerArr;
  }
  function ModifycreditScoreLeft(value, player) {
    if (value == 'dec')
      creditScoreLeft -= parseFloat(player.value);
    if (value == 'inc')
      creditScoreLeft += parseFloat(player.value);
  }

  function getcreditScoreLeft() {
    return creditScoreLeft;
  }

  function ModifyselectedPlayerCount(value) {
    if (value == 'dec')
      selectedPlayerCount--;
    if (value == 'inc')
      selectedPlayerCount++;
  }

  function getselectedPlayerCount() {
    return selectedPlayerCount;
  }

  function returnPlayingEleven() {
    return palyingEleven;
  }
  function setInfo(value) {
    palyingEleven.push(value);
  }

  function getSelectedCaption(value) {
    if (value == 'C') {
      return selectedcaption;
    }
    if (value == 'VC') {
      return vselecteicecaption;
    }
  }
  function ModifySelectedCaption(value, player) {
    if (value == 'C')
      selectedcaption = player;

    if (value == 'VC')
      vselecteicecaption = player;
  }
})
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider.when('/addNewTeam', {
        templateUrl: 'createTeam.html',
        controller: 'Controller'
      })
      $routeProvider.when('/previewScreen', {
        templateUrl: 'teamPreview.html',
        controller: 'Controller'
      })
      $routeProvider.when('/addCaption', {
        templateUrl: 'selectCaptionAndVC.html',
        controller: 'Controller'
      })
      $routeProvider.when('/addTeamPage', {
        templateUrl: 'addNewTeam.html',
        controller: 'Controller'
      })
      $routeProvider.when('/', {
        templateUrl: 'addNewTeam.html',
        controller: 'Controller'
      }).otherwise({
        redirectTo: 'index.html'
      });

    }
  ])
  .controller('Controller', ['$scope', '$location', '$window', 'commonService', function ($scope, $location, $window, commonService) {
    $scope.selectedTab = 'WK';
    $scope.selectedPlayerArr = commonService.getselectedPlayerArr();
    $scope.teamPreview = commonService.returnPlayingEleven();
    $scope.selectedPlayerCount = commonService.getselectedPlayerCount();
    $scope.creditScoreLeft = commonService.getcreditScoreLeft();
    $scope.playerselected = false;
    // $scope.proceedContinue = false;
    var selectedcaption = commonService.getSelectedCaption('C');
    var vselecteicecaption = commonService.getSelectedCaption('VC');
    $scope.scope = false;
    $scope.addNewTeama = () => {
      commonService.setInfo('value');
      $scope.seerviceData = commonService.getInfo();
    }
    $scope.addNewTeam = () => {
      $location.path("/addNewTeam");
    }
    $scope.openPreview = () => {
      $location.path("/previewScreen");
    }
    $scope.addCaption = () => {
      if ($scope.proceedContinue == true) {
        $location.path("/addCaption");
      } else {
        $('#ruleModal').modal('show');
      }
    }
    $scope.addTeamScreen = () => {
      if($scope.saveTeam == true)
      $location.path("/addTeamPage");
       else
      alert('select Caption and Vice-Caption !!'); 
    }
    $scope.goback = () => {
      $window.history.back();
    }
    $scope.createTeamTabs = style => {
      $scope.selectedTab = style;
    }
    if ($scope.selectedPlayerArr['WK'] >= 1 && $scope.selectedPlayerArr['BAT'] >= 4 &&
      $scope.selectedPlayerArr['AR'] >= 2 && $scope.selectedPlayerArr['BOWL'] >= 2 && $scope.selectedPlayerArr['WK'] <= 1 &&
      $scope.selectedPlayerCount >= 11 && $scope.selectedPlayerArr['AR'] + $scope.selectedPlayerArr['BOWL'] >= 5

    ) {
      $scope.proceedContinue = true;
    } else {
      $scope.proceedContinue = false;
    }
    $scope.myFilter = function (player) {
      if ($scope.selectedTab == 'WK') {
        if (player.style == 7 || player.style == 5) {
          return player;
        }
      }
      if ($scope.selectedTab == 'BAT') {
        if (player.style == 1 || player.style == 3 || player.style == 5) {
          return player;
        }
      }
      if ($scope.selectedTab == 'AR') {
        if (player.style == 3 || player.style == 9 || player.style == 11) {
          return player;
        }
      }
      if ($scope.selectedTab == 'BOWL') {
        if (player.style == 11 || player.style == 13) {
          return player;
        }
      }
    }
    $scope.callMe = player => {
      if (player.selected) {
        player.selected = false;
        $scope.proceedContinue = false;
        commonService.ModifycreditScoreLeft('inc', player);
        $scope.creditScoreLeft = commonService.getcreditScoreLeft();
        commonService.ModifyselectedPlayerCount('dec');
        $scope.selectedPlayerCount = commonService.getselectedPlayerCount();
        commonService.ModifyselectedPlayerArr('dec', player);
        commonService.modifyPlayingEleven(player);
      }
      else {
        if ($scope.selectedPlayerCount < 11 && $scope.creditScoreLeft >= player.value) {
          player.selected = true;
          commonService.ModifycreditScoreLeft('dec', player);
          $scope.creditScoreLeft = commonService.getcreditScoreLeft();
          commonService.ModifyselectedPlayerCount('inc');
          $scope.selectedPlayerCount = commonService.getselectedPlayerCount();
          commonService.ModifyselectedPlayerArr('inc', player);
          if ($scope.selectedPlayerArr['WK'] >= 1 && $scope.selectedPlayerArr['BAT'] >= 4 &&
            $scope.selectedPlayerArr['AR'] >= 2 && $scope.selectedPlayerArr['BOWL'] >= 2 && $scope.selectedPlayerArr['WK'] <= 1 &&
            $scope.selectedPlayerCount >= 11 && $scope.selectedPlayerArr['AR'] + $scope.selectedPlayerArr['BOWL'] >= 5
          ) {
            $scope.proceedContinue = true;
          } else {
            $scope.proceedContinue = false;
          }
          commonService.setInfo(player);
        } else {
          if ($scope.selectedPlayerCount >= 11)
            alert('11 players selected, tap continue to proceed');
          else if ($scope.creditScoreLeft < player.value)
            alert('only ' + $scope.creditScoreLeft + ' left');
        }

      }
    }
    $scope.setCaption = (player, caption) => {
      $scope.saveTeam = false;
      if (caption == 'C') {
        if (selectedcaption) {
          var index = $scope.teamPreview.indexOf(selectedcaption);
          $scope.teamPreview[index].caption = false;
        }
        if (player.viceCaption) {
          player.viceCaption = false;
          vselecteicecaption = undefined;
        }
        player.caption = true;
        commonService.ModifySelectedCaption('C', player);
        selectedcaption = commonService.getSelectedCaption('C');
      }
      else if (caption == 'VC') {
        if (vselecteicecaption) {
          var index = $scope.teamPreview.indexOf(vselecteicecaption);
          $scope.teamPreview[index].viceCaption = false;
        }
        if (player.caption) {
          player.caption = false;
          selectedcaption = undefined
        }
        player.viceCaption = true;
        commonService.ModifySelectedCaption('VC', player);
        vselecteicecaption = commonService.getSelectedCaption('VC');
      }
      if (selectedcaption && vselecteicecaption)
        $scope.saveTeam = true;
    }
    if (selectedcaption && vselecteicecaption)
      $scope.saveTeam = true;

    $scope.respodaata = commonService.getInfo();
  }]);


