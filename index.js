function add(num1, num2){
    // console.log('INPUT', num1, num2);
    const sum = num1 + num2;
    // console.log("Sum", sum);
    return sum;
}

function  findByName(users, name) {
    // console.log("INPUT:", users, name);
    // 1. loop maken
    // 2. if statement: is de name hetzlefde als de naam uit het object?
    // 3. zo ja return dat object

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        // console.log("USER 1 voor 1?", user);
        if (user.name === name){
            // console.log("GEVONDEN?", user);
            return user;
        };
    };

    return null;
};

// 1. exporteren

module.exports = {
    add: add,
    findByName: findByName,
};

