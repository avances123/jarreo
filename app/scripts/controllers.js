'use strict';
angular.module('Ionic.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // },

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})


.controller('ConfiguracionCtrl', function($scope,Configuracion) {
  $scope.datos = Configuracion.getConfig();
  $scope.$watch('datos', function() {
    Configuracion.setConfig($scope.datos);
  });
})


.controller('ParticipantesCtrl', function($scope,Participantes) {
  $scope.participantes = Participantes.getParticipantes();
  $scope.addNuevoParticipante = function (nombre){
    Participantes.addParticipante(nombre);
  };
})



.controller('JarreoCtrl', function($scope, $stateParams, Participantes,Rondas,Configuracion) {
  $scope.participantes = Participantes.getParticipantesActivos();
  $scope.rondas = Rondas.getRondas();
  $scope.deudaTotal = Rondas.getDeudaTotal();
  $scope.config = Configuracion.getConfig();
  $scope.nuevaRonda = function (){
    var ronda = {
      'participantes':$scope.participantes,
      'precio':$scope.config.precio,
      'bebida':$scope.config.bebida
    };
    Rondas.addRonda(ronda);
    //$scope.rondas.push(ronda);
    $scope.deudaTotal = Rondas.getDeudaTotal();
  };
  $scope.resetRondas = function (){
    Rondas.resetRondas();
    $scope.rondas = Rondas.getRondas();
  };

});
