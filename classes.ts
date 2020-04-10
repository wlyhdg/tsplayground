interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

// class User implements UserInterface giving an error -> see if I can fix this
class User {
  // private name: string;
  // private email: string;
  // public age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created: ' + this.name);
  }

  private register() {
    console.log(this.name + ' is now registered');
  }

  payInvoice() {
    console.log(this.name + ' paid invoice.');
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

// let jj = new User('jj', 'jj@gmail.com', 26);
// jj.register();

let mike: User = new Member(1, 'Mike Ike', 'mni@gmail.com', 43);
mike.payInvoice();