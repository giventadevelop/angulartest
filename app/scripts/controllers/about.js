'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
	.controller('AboutCtrl', function($scope,$timeout) {
		//$scope.loadingSpinner=true;
		$scope.loadingSpinner=false;
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.checkboxModel = {
			value1 : true,
			value2 : 'YES'
		};
		$scope.updateTotal = function() {

			angular.element(document.getElementById('chk1'))[0].disabled = true;
		}

			$scope.disableCheck = function(event) {
				 //alert(event.target.id);
				var chkId=event.target.id;
				//angular.element(document.getElementById( event.target.id))[0].disabled = true;
				angular.element(document.getElementById( chkId))[0].disabled = true;
				
			}
			
			$scope.showLoad = function() {
				$scope.loadingSpinner=true;
				$timeout(callAtTimeout, 15000);
				$timeout( function(){
	                $scope.test1 = 'Hello World!';
	                console.log( 'Inside  time out waiting' );
	            }, 150000 );
				 console.log( 'Inside  time out waiting' );
			//	$scope.loadingSpinner=false;

			}
			
			function callAtTimeout() {
			    console.log("Timeout occurred");
			    $scope.loadingSpinner=false;
			}
			
	});