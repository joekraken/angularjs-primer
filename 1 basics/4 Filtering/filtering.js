// Controller is called when ng-controller is declared
function FilteringController($scope){
	$scope.selectedCompany = 0;
	$scope.selectedGame = null;
	// mock JSON data
	$scope.games = [
		{
			id: 0,
			bizName: 'EASports',
			titles: [
				'Battlefield',
				'Crysis',
				'Madden NFL',
				'Mass Effect'
			],
			enable: true
		},
		{
			id: 1,
			bizName: 'Epic Games',
			titles: [
				'Unreal',
				'Unreal 2',
				'Unreal 3',
				'Infinity Blade'
			],
			enable: true
		},
		{
			id: 2,
			bizName: 'LucasArts',
			titles: [
				'Star Wars: KOR',
				'Star Wars: TOR'
			],
			enable: true
		},
		{
			id: 3,
			bizName: 'Blizzard',
			titles: [
				'Diablo',
				'Starcraft',
				'WoW'
			],
			enable: false
		}
	];
}