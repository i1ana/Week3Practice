angular.module('agenda', [])
	
	angular.module('agenda')
		.controller('agendaController', ['$scope', function($scope){

			var agenda=$scope;

			agenda.today = Date();
			agenda.dateObj = new Date();
			console.log(agenda);
				
			for (key in agenda.dateObj){
			console.log(key);
			}

		console.log("date ",agenda.today);
		console.log(typeof agenda.today);


			





}])

