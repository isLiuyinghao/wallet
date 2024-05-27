/**
 * @author liu
 */

const Contacts = artifacts.require("StudentStorage.sol")

module.exports = async function(callback) {
    const studentStorage = await Contacts.deployed()
    await studentStorage.setData('liu', 100)

    let res = await studentStorage.getData()
    console.log(res)
    callback()
}