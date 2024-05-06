# 作业实践文档

# 任务

- **实现一个简易的 ERC20 合约（前端、后端都需要完成）**
    
    技术要求：Solidity 语法（前端要求了解即可，后端要求掌握）
    
    实现目标：了解合约基本概念语法，能根据教程 Demo 实现 ERC20 合约（前端）；
    
    掌握合约基本概念语法，做到根据 IERC20 合约不参考 Demo 教程自己实现 ERC20。
    
    参考资料：https://github.com/AmazingAng/WTF-Solidity (1-6讲、12 讲，Demo 教程为 31 讲）。
    
    学习提示：前后端要求不一样，根据自己的方向学习即可，有问题小群讨论解答。
    
- 查阅 Defi相关概念，以 AAVE 为典型，理解其基本合约实现逻辑（前、后端均需要了解，Defi 是 web3 很重要的一个赛道，对面试有帮助）。
    
    登链文档参考： https://learnblockchain.cn/article/6293
    
    AAVE 简单科普： https://www.bilibili.com/video/BV1tP4y1279p/?spm_id_from=333.337.search-card.all.click
    
    深入 AAVE 合约源码（选看）： https://www.bilibili.com/video/BV1qR4y177Uk/?spm_id_from=333.337.search-card.all.click&vd_source=232d2847d404e1b7f7e956165ad03541
    
- 实战作业（分前后端）
    
    后端：使用 foundry 部署一个众筹合约（要求包括部署脚本、部署配置、测试模块），参考 chainlink foundry(https://b23.tv/kX1W6RD) 教程实现(4.1-4.7+ 6.1-7.22)。
    
    前端：使用 nextjs最新版本 、 wagmi 、 rainbowkit 实现一个基础的钱包连接，用法参考文档。
    
- 实战作业2（分前后端）
    
    后端：
    
    1. 参考 chainlink foundry 教程完成Raffle 合约（要求包括部署脚本、部署配置、测试模块）
    2. 完成 EIP721 教程 https://github.com/AmazingAng/WTF-Solidity/tree/main/52_EIP712 
    
    前端：
    
    搭建一个基于最新版本 nextjs 与 wagmi 的前端脚手架，并实现连接 okx(btc网络) 与 unisat 钱包的逻辑。
    
    注意不能使用 rainbowkit 。自己写钱包连接按钮与选择样式，实现钱包连接逻辑，具体参考 okx 与 unisat 的开发者文档。
    

- 实战作业 3
    
    后端作业：实现NFT 合约（foundry 课程 150-172）
    
    前端作业：实现签名脚本以及钱包签名登陆  参考 https://github.com/WTFAcademy/WTF-Ethers/tree/main/26_EIP712    https://github.com/WTFAcademy/WTF-Ethers/tree/main/ET02_SignInWithEthereum