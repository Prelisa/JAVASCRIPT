// Task 2
// prepare a story to ask money with parent
//parent told to wait few days till they recieve salary
//perfrom some non blocking tasks
//once they get salary, once you recieve 
//now buy phone, laptop, cycle 


function askMoney(amount, cb) {
    console.log('I call mom, mom tells to wait for few days till she recieves salary');
    setTimeout(function () {
        console.log('mom gets salary', amount);
        cb();
        function buyLaptop(model, callback) {
            console.log('Shopkeeper says that model I want will take few days to arrive at the shop');
            console.log('I place the order of the laptop for shipping');
            console.log('I pay some advance amount');
            setTimeout(function () {
                console.log('Laptop arrives at the shop the model I want >>', model);
                console.log('shopkeeper calls me to get my laptop>>', model);
                callback();
                    function buyDress(design,callbacks) {
                        console.log('I go to boutique and show them the kurtha I want to get designed');
                        console.log('designer asks me to wait for few days till it gets ready')
                        setTimeout(function () {
                            console.log('designer calls me saying my kurtha is ready', design);
                            callbacks();
                        }, 2000);
                    }
                    buyDress('kurtha', function () {
                        console.log('I go to the boutique');
                        console.log('I pay amount for the kurtha');
                        console.log('I come back home with jolly mood and kurtha');
                    });
                    console.log('I come back home and call my sisters to show them the design');
                    console.log('I call my mom and tell her that I placed the order for the design I want to wear')
            }, 2000);
        }
        
        buyLaptop('Asus Zenbook', function () {
            console.log('I pay all the needed amount');
            console.log('I come back home with the new laptop');
        });
        console.log('I go back home , look at the review of the laptop that I want to buy');
        console.log('I call mom and tell her that the laptop I want to buy will be at the shop after few days and I paid some advance amount');
        console.log('I show my brother the laptop I placed order')

    }, 2000);


}
console.log('i need money for getting myself a new laptop and get the dress')
askMoney('130k', function () {
    console.log('I recieve money from mom');
    console.log('I get excited to buy new laptop');
    console.log('I go to buy laptop')
});
//non blocking code blocks 
console.log('Watches Netflix');
console.log('goes to college');
console.log('washes clothes');
console.log('meets friends');
console.log('searches about which laptop to buy');

