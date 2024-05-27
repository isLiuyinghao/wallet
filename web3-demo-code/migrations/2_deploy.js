/**
 * @author: liu
 */

const Contacts = artifacts.require('StudentListStorage.sol')

module.exports = function(deployer) {
    deployer.deploy(Contacts)
}