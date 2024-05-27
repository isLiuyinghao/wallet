// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract StudentStorage {
    // 创建两个变量 username + age
    uint age;
    string username;
    
    // storage 状态变量 存储在链上  
    // memory 临时变量 不上链
    // calldata 存储在内存中 不上链；和memory不同的是，calldata变量不能修改
    // 一般用于函数的参数
     function setData(string calldata _name, uint _age) public {
        username = _name;
        age = _age;
    }

    // view 视图函数 只访问不修改状态
    // pure 纯函数 不访问 不修改
    function getData() public view returns (string memory, uint) {
        return (username, age);
    }
}