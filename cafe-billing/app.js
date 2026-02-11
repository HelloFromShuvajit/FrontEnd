class MenuItem{
        constructor(name, price){
            this.name=name;
            this.price=price;
        }
        describe(){
            return `${this.name} - ₹${this.price}`;
        }
    }
    const menuBreverage = [
            new MenuItem("Latte", 130),
            new MenuItem("Espresso", 120),
            new MenuItem("Green Tea", 90),
            new MenuItem("Black Coffee", 80),
            new MenuItem("Chai Tea", 70),
    ];

    const menuSnack = [
        new MenuItem("Grilled Veg Chesse Mayonese Sandwich", 150),
        new MenuItem("Grilled Veg Chesse Sandwich", 140),
        new MenuItem("Grilled Veg Sandwich", 120),
        new MenuItem("Grilled Chesse Sandwich", 110),
    ]
    const breverageList = document.getElementById('breverageList');
    breverageList.innerHTML = '<h3>Breverage List</h3>' + 
    menuBreverage.map(item => `<div class='itemList'>${item.describe()}</div>`).join('');
    
    const snackList= document.getElementById('snackList');
    snackList.innerHTML = '<h3>Snack List</h3>' +
    menuSnack.map(item => `<div class='itemList'>${item.describe()}</div>`).join('');
    let orderList =[];
    let totalBill=0;
    let bill=0;
    let discount=0;
    let customer="";

        document.getElementById('orderBreverages').addEventListener('click',()=>{

            alert('Welcome to Shuvo\'s Cafe');

            if(!customer){
                customer= prompt("What\'s your name?");
            }
            if(!customer)
            customer= 'Guest';
            menuBreverage.forEach(item => console.log(item.describe()));


            while(true){
                let order = prompt('Type your Breverage Item from the list\n If done choosing type \'done\' ');
                if(!order) continue;
                if(order.toLocaleLowerCase() === 'done') break;

                let foundItem= menuBreverage.find(i =>i.name.toLocaleLowerCase() === order.toLocaleLowerCase());
                if(foundItem){
                    orderList.push(foundItem);
                    totalBill+= foundItem.price;
                    alert(`${foundItem.name} is added to your order.`);
                } else{
                    alert(`${order} is not in the menu!!`);
                }
            }      
        });
        
        document.getElementById('orderSnacks').addEventListener('click',()=>{

            alert('Welcome to Shuvo\'s Cafe');

            if(!customer){
                customer= prompt("What\'s your name?");
            }
            if(!customer)
            customer= 'Guest';
            menuSnack.forEach(item => console.log(item.describe()));

            while(true){
                let order = prompt('Type your Snack Item from the list\n If done choosing type \'done\' ');
                if(!order) continue;
                if(order.toLocaleLowerCase() === 'done') break;

                let foundItem= menuSnack.find(i =>i.name.toLocaleLowerCase() === order.toLocaleLowerCase());
                if(foundItem){
                    orderList.push(foundItem);
                    totalBill+= foundItem.price;
                    alert(`${foundItem.name} is added to your order.`);
                } else{
                    alert(`${order} is not in the menu!!`);
                }
            } 
        });
        document.getElementById('getReceipt').addEventListener('click',()=>{
            bill=totalBill;
                let returning = prompt('Are you a returning customer?[yes/no]');
                if(returning.toLocaleLowerCase() === 'yes'){
                    discount= totalBill * 0.1;
                    bill= totalBill-discount;
                    alert(`Heyy!! You just saved ₹${discount} for your loyalty!!`);
            }
            if(returning.toLocaleLowerCase() === 'no'){
                discount=0;
            }

       let receiptText = `
______________________

Customer: ${customer}

Items ordered:
${orderList.map(i => `- ${i.name} (₹${i.price})`).join('\n')}

______________________

Total items: ${orderList.length}
Total bill: ₹${totalBill}
Loyalty Discount: ₹${discount}
Final bill: ₹${bill}

Thank you for ordering from Shuvo's Cafe
`;

        document.getElementById('receipt').innerHTML = `<h3>Your Receipt</h3>` + receiptText;
        });