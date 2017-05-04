//Employee object
var employee={name:"Vinod",
              age:"25",
			  salary:"50000",
			  address:{            //Nested object that holds the address
				  city:"bangalore",
				  state:"KA",
				  pin:"560076"
				}
	};

//To print in console	
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.pin);