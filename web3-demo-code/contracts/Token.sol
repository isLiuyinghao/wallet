// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;

import "openzeppelin-solidity/contracts/math/safeMath.sol";

// https://github.com/ethereum/ercs/blob/master/ERCS/erc-20.md

contract Token {
    using SafeMath for uint256;
    string public name = "Token";
    string public symbol = "KWT";
    uint256 public decimals = 18;
    uint256 public totalSupply;
    // 自动生成getter方法
    
    // mapping
    mapping(address => uint256) balanceof;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        totalSupply = 100 * ( 10 ** decimals);

        balanceof[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0));
        balanceof[msg.sender] = balanceof[msg.sender].sub(_value);
        balanceof[_to] = balanceof[msg.sender].add(_value);
        return true;
    }

    function _transfer(address _from, address _to, uint256 _value) internal {
        require(_to != address(0));
        require(balanceof[_from] >= _value);
        balanceof[_from] = balanceof[_from].sub(_value);
        balanceof[_to] = balanceof[_to].add(_value);
    }
}