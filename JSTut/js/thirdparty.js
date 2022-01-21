(function (){

        let msg = "Hiiii third party";

        function greet(){
            console.log(msg);
        }

        greet();

        // error is --> SyntaxError: Identifier 'msg' has already been declared

        // bcz we have alredy msg variable in script.js 
        // then how to solve?
        // one way is immediatly invoked this function i.e. making local to that variable


})();
