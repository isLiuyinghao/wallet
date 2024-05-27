// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract StudentListStorage {
    // 结构体
    struct  Student {
        uint id;
        string name;
        uint age;
    }
    // 动态数组
    Student[] public StudentList;

     function addList(string memory _name, uint _age) public returns (uint) {
        uint count = StudentList.length;
        uint index = count + 1;
        StudentList.push(Student(index, _name, _age));
        return StudentList.length;
    }

    function getList() public view  returns (Student[] memory) {
        Student[]  memory list = StudentList;
        return list;
    }
}