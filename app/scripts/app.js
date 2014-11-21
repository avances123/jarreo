'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Ionic', ['ionic', 'config', 'Ionic.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.jarreo', {
      url: '/jarreo',
      views: {
        'menuContent' :{
          templateUrl: 'templates/jarreo.html',
          controller: 'JarreoCtrl'
        }
      }
    })

    .state('app.configuracion', {
      url: '/configuracion',
      views: {
        'menuContent' :{
          templateUrl: 'templates/configuracion.html',
          controller: 'ConfiguracionCtrl'
        }
      }
    })

    .state('app.participantes', {
      url: '/participantes',
      views: {
        'menuContent' :{
          templateUrl: 'templates/participantes.html',
          controller: 'ParticipantesCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/jarreo');
})

.service('Participantes', function () {
  var participantes = [];
  var participantesActivos = [];

  var addParticipante = function  (nombre) {
    participantes.push({'nombre':nombre,'activo':true,'deuda':0});
  };

  var getParticipantes = function(){
    return participantes;
  };

  var getParticipantesActivos = function(){
    participantesActivos = [];
    angular.forEach(participantes, function(value) {
      if (value.activo) {
        participantesActivos.push(value);
      }
    });
    return participantesActivos;
  };

  return {
    addParticipante:addParticipante,
    getParticipantes:getParticipantes,
    getParticipantesActivos:getParticipantesActivos
  };
})

.service('Configuracion', function () {
  var datos = {
    bebida : 'Cerveza',
    precio : 1.25
  };

  var setConfig = function  (data) {
    datos = data;
  };

  var getConfig = function(){
    return datos;
  };



  return {
    setConfig:setConfig,
    getConfig:getConfig
  };

})

.service('Rondas', function () {
  var rondas = [];
  var precio = 0;

  var addRonda = function  (ronda) {
    rondas.push(ronda);
  };

  var getRondas = function(){
    console.log(rondas);
    return rondas;
  };

  var resetRondas = function(){
    rondas = [];
  };

  var getDeudaTotal = function(){
    precio = 0;
    angular.forEach(rondas, function(value) {
      precio = precio + value.participantes.length * value.precio;
    });
    return precio;
  };

  return {
    addRonda:addRonda,
    getRondas:getRondas,
    getDeudaTotal:getDeudaTotal,
    resetRondas:resetRondas
  };
});


