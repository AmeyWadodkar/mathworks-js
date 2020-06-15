const obj = {
  name: 'John',
  getName() {
    return this.name;
  },
  printName() {
    console.log(this.getName());
  },
  complexPrintName() {
    const self = this;

    // Doesn't work, loses "this" in printName
    // return this.printName;

    // Works, "this" is permanently bound to obj
    return this.printName.bind(this);

    /*
    return this.printName.bind({
      name: 'Gaurav',
      getName() {
        return this.name;
      },
    });
    */

    // anyFunction.bind(someObj): attaches a copy of anyFunction bound to someObj

    /*
    return function() {
      console.log('(Regular function) Name: ', this.name);
      console.log('(Regular function) self.Name: ', self.name);
    }
    */
  },
  arrowPrintName() {
    return () => {
      console.log('(Arrow function) Name: ', this.name);
      let x = 10;
    };
  },
};

obj.printName();

const printer = obj.complexPrintName();
printer();

const arrowPrinter = obj.arrowPrintName();
arrowPrinter();
