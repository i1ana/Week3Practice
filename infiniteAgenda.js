// Agenda.JS 
angular.module('agenda',[]);

angular.module('agenda')
	.controller('agendaController',['$scope', function($scope){

var weekDays = {

	Day1: 'Sunday',
	Day2: 'Monday',
	Day3: 'Tuesday',
	Day4: 'Wednesday',
	Day5: 'Thursday',
	Day6: 'Friday',
	Day7: 'Saturday'
}

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

			$scope.date = function() {
				 console.log("I am working")
			}



}])