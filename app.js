/**
 * Created by haider on 1/6/2016.
 */


var app = angular.module("myToDo", ["ngMaterial", "ngMdIcons"]);

app.service("myService", function(){
    var self = this;
    this.remainingCountvar = 0;
    this.taskArrey = [];
    this.saveInTaskArrey = function(tObj){
        //taskArrey.push(tObj);

        if ( tObj.name == "" ) {

            alert("you have add nothing !");
        }
        else {
            self.taskArrey.push(tObj);
            self.remainingCountvar++;
        }
    };
    this.getAllTask = function(){
        return self.taskArrey;
    };

    this.returnLength = function () {
        return self.taskArrey.length;

    };


    this.returnRemainLength = function () {
        var totalLength = self.taskArrey.length;


    };

    this.removeTodo = function () {

        for (var i = 0; i < self.taskArrey.length; i++){

            if(self.taskArrey[i].status){
                self.taskArrey.splice(i, 1);
                self.removeTodo();
            }

        }

    };

    this.remainingCount = function (){
       return self.remainingCountvar;
    }
    
});


app.controller("addTodoctrl1", function(myService){

    var self = this;
    this.saveInTaskArr = function(){
        var tObj = {
            name : this.task,
            status: false
        };
        myService.saveInTaskArrey(tObj);
        this.task = "";



    };

});

app.controller("savedTodo2", function(myService){
    var self = this;

    this.alltasks = myService.getAllTask();


    this.count = myService.returnLength;


    this.remainCount = myService.remainingCount;
    
    
    this.remove = myService.removeTodo;

    this.status = function (index){
        if(!this.alltasks[index].status){
            myService.remainingCountvar--;
        }
        else{
            myService.remainingCountvar++;
        }
    }


});





/*

app.controller("remainingTodo3", function($scope, myService){

    $scope.counts = myService.getAllTask();
    $scope.count = $scope.counts.length;




});
*/
