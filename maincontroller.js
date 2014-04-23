app.controller('MainController', function($scope) {

	$scope.people = [
			 {
            id: 0,
            name: 'Blade',
            email: 'blades@tenorg.com',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Trag',
            email: 'trag@tenorg.com',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Hilby',
            email: 'hils@hilby.com',
            music: [
                'Pop',
                'Rock',
                'Grunge',
                'Death Metal'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Lance',
            email: 'lance@tenorg.com',
            music: [
                'Rock',
                'New Age',
                'Metal'
            ],
            live: true
        }
		];
		$scope.newPerson = null;
		$scope.addNew = function() {
		    if ($scope.newPerson != null && $scope.newPerson != "") {
		        $scope.people.push({
		            id: $scope.people.length,
		            name: $scope.newPerson,
		            live: true,
		            music : []
		        });
		    $scope.newPerson = "";
		    }
		}



});
