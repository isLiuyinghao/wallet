/**
 * @author liu
 */

const Contacts = artifacts.require("StudentListStorage.sol")

module.exports = async function(callback) {
    const studentStorage = await Contacts.deployed()
    await studentStorage.addList('liu', 101)

    let res = await studentStorage.getList()
    console.log(res)
    callback()
}