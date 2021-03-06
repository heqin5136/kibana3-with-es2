/** @scratch /panels/5
 *
 * include::panels/iframe.asciidoc[]
 */

/** @scratch /panels/iframe/0
 * == iframe
 * Status: *Stable*
 *
 * The iframe panel is used for 
 * iframe.
 *
 */
define([
  'angular',
  'app',
  'lodash',
  'require'
],
function (angular, app, _, require) {
  'use strict';

  var module = angular.module('kibana.panels.iframe', []);
  app.useModule(module);

  module.controller('iframe', function($scope, filterSrv) {
    $scope.panelMeta = {
      status  : "Stable",
      description : "iframe panel"
    };

    // Set and populate defaults
    var _d = {
      /** @scratch /panels/iframe/5
       *
       * === Parameters
      /** @scratch /panels/text/5
       * content:: The content of your panel, written in the mark up specified in +mode+
       */
      url : "",
      height: "150px"
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
        $scope.from = filterSrv.timeRange('last').from.getTime();
        $scope.to = filterSrv.timeRange('last').to.getTime();
    };

    $scope.render = function(url) {
      _.templateSettings = {interpolate : /\{\{(.+?)\}\}/g};
      var template = _.template(url);
      return template({from:$scope.from, to:$scope.to});
    }
  });
});
