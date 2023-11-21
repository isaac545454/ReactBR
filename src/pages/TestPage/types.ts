export type TestPageProps = {}


//mesclagem de interface
interface User { id: number }
interface User { name: string }
const user: User = { id: 1, name: "test" }


//sintaxe suportada pelo type, mas, não pela interface
type TestProps<T> = {
  [K in keyof T]: string
}
interface ITestProps<T>{
    [K in keyof T]: string;
}


//criaão de união de literais de string... não temos uma equilvalencia 
//em interface 
type TransportationType = 'Ônibus' | 'Carro' | 'Bicicleta' | 'Andar';


//TYPE
type TestEmail = string

type Aaaa = {
    test: ()=>void 
}

class TestClass implements Aaaa {
    test (){
console.log("aa")
    }
}