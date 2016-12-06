angular.module("App", ['rzModule'])
    .controller("Students", function ($scope, $http)
//отправка рейтинга
    {
        $scope.names = [undefined, "123", "124", "125"];
        $scope.user = function (user) {
            $scope.Actstudent = user;
        };

        $scope.PutGroup = function ()
        {
            $scope.Actstudent.group = $scope.studentGroup;
            $scope.Actstudent.group


            $http.post("http://192.168.3.36:3000/group", $scope.Actstudent).then(function (res) {

            });


        }


        $scope.SendRating1 = function () {
            $scope.Actstudent.rating = $scope.priceSlider;
            $scope.Actstudent.ip


            $http.post("http://192.168.3.36:3000/rate", $scope.Actstudent).then(function (res) {

            });

        }


        // ------
        $scope.priceSlider = 10;
        $http.get("http://192.168.3.36:3000/solutions").then(function (res) {
            console.log("Solutions", res);
            $scope.solutions = res.data;
        })
    });