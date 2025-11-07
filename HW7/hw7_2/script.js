let users = []
function filterFunction(user){
    return user.id % 2 === 0;
}
const filterUsers = users.filter(filterFunction);
console.log(filterUsers);