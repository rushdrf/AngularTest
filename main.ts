namespace main{
    export class TestClass {

        num1 = 1;
        num2 = 100;
        static num2 = 13;
    
      testMethod():void {
        console.log("testMethod output");
      }
    
      testMethod2():number {
        return 99;
      }
    
      static staticMethod():void {
        console.log("Hello StaticMethod")
      }
    
      WhileMethod():void {
        let n:number = this.num1;
        while (n <= this.num2) {
            if (n > 50) break;
            console.log(n % 2 === 0 ? n + " is an even number." : n + " is an odd number.");
            n++;
        }
      }
    
      DoMethod():void {
        let n:number = this.num1;
        do {
            console.log(n % 2 === 0 ? n + " is an even number." : n + " is an odd number.");
            n++;
        } while (n <= this.num2)
      }
    
      MethodWithParameter(num1:number, num2:number):number {
        let n:number;
    
        n = num1 + num2;
    
        return n;
      }
    }
    
    export class Employee {
      id:number | undefined;
      name:string | undefined;
    
      constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
      }
    
      Call() {
        console.log(this.id);
        console.log(this.name);
      }
    
    }
    
    export class Singleton {
      private constructor() {  } //For single purpose make it private so that it will not be instantiate multiple times.
    
      private static singleton:Singleton = new Singleton();
    
      public static GetSingletonInstnce() : Singleton {
        return this.singleton;
      }
    
      private Name:string | undefined;
      public setName(inputName:string):void {
        this.Name = inputName;
      }
      public getName():string | undefined {
        return this.Name
      }
      
    
    }
    
    export class StaticClass {
      constructor() {}
    
      public static GetString():string {
        return "This is static class";
      }
    
      public static GetNumber():number {
        return 23;
      }
    }

}