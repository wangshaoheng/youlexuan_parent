app.controller('brandController', function ($scope,$controller,brandService) {//依赖注入服务

    //继承baseController,本质上继承的是$scope
    $controller('baseController',{$scope:$scope});

    $scope.findAll=function () {
        brandService.findAll().success(//把$http.get()业务代码分离到了brandService中,在此处用brandService调用
            function (response) {
                $scope.list = response;
            }
        );
    }

    /*$scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }*/

    $scope.findPage=function (page, rows) {
        brandService.findPage(page, rows).success(
            function (response) {
                $scope.list = response.rows;

                //把后天的总条数给$scope.paginationConf
                $scope.paginationConf.totalItems = response.total;
            }
        );
    }

    /*//分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };*/

    /*
    * 新增,及修改
    * 品牌从$scope双向绑定域获取
    * */
    $scope.save=function () {

        //要区分是新增还是修改,brand.id
        if ($scope.brand.id == null){
            brandService.add($scope.brand).success(
                function (response) {
                    if (response.success){
                        //新增成功,查询列表
                        $scope.reloadList();
                    }else {
                        alert(response.message);
                    }
                }
            );
        }else {
            brandService.update($scope.brand).success(
                function (response) {
                    if (response.success){
                        //新增成功,查询列表
                        $scope.reloadList();
                    }else {
                        alert(response.message);
                    }
                }
            );
        }
    }

    /*
    * 根据id查询品牌*/
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.brand = response;
            }
        );
    }

    /*//初始化复选框的array
    $scope.selectIds=[];

    /!*
    *选中取消,selectIds增加删除
    * 如何判断是选中还是取消:angularJs提供了内置的对象$event中可以去除是勾选还是取消
    *!/
    $scope.updateSelection=function ($event,id) {
        if ($event.target.checked){//勾选
            $scope.selectIds.push(id);
        }else{//取消
            //根据id找到对应的index
            var index = $scope.selectIds.indexOf(id);
            //根据index从数组中删除
            $scope.selectIds.splice(index,1);
        }
    }*/

    /*
    * 删除
    *
    * */
    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if (response.success){
                    alert(response.message);
                    $scope.reloadList();
                }else{
                    alert(response.message);
                }
            }
        );
    }

    $scope.searchEntity = {};

    /*条件查询*/
    $scope.search=function (page, rows) {
        brandService.search(page, rows, $scope.searchEntity).success(
            function (response) {
                $scope.list = response.rows;

                //把后台的总条数给$scope.paginationConf
                $scope.paginationConf.totalItems = response.total;
            }
        );
    }
});