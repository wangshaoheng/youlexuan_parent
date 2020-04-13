app.controller('baseController' ,function($scope){
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };
    //初始化复选框的array
    $scope.selectIds=[];

    /*
    *选中取消,selectIds增加删除
    * 如何判断是选中还是取消:angularJs提供了内置的对象$event中可以去除是勾选还是取消
    */
    $scope.updateSelection=function ($event,id) {
        if ($event.target.checked){//勾选
            $scope.selectIds.push(id);
        }else{//取消
            //根据id找到对应的index
            var index = $scope.selectIds.indexOf(id);
            //根据index从数组中删除
            $scope.selectIds.splice(index,1);
        }
    }
});