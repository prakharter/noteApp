angular.module('app')
  .controller('MainCtrl', ['$scope', '$route', 'Post',
      function($scope, $route, Post) {
        
          $scope.posts = Post.all;
     $scope.post = {title: ''}; 
      
    
      $scope.deletePost = function(post){
         Post.delete(post);
         };

        $scope.newPost    = function() {
          $scope.post = new Post();
          $scope.editing = false;
        }

        $scope.activePost = function(post) {
          $scope.post = post;
          $scope.editing = true;
        }


        $scope.save = function(post) {
          Post.create(post);
          $scope.post = {title: ''}; 
        }

        $scope.delete = function(post) {
          Post.delete(post);
          //_.remove($scope.posts, post)
        }

      }
  ]);
