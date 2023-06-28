const FizzBuzz= require("../fizzBuzz")



describe(
    "divisores de 3 y 5 retorna FizzBuzz" , ()=>{
        test("caso 1 devuleve Fizz cd divisible por 3", ()=>{
            const fizz_buzz= new FizzBuzz();
            let numero =15;
            let respuesta_esperada = "Fizz";

            const respuesta = fizz_buzz.retornar_fizz_buzz(numero);

            expect(respuesta).toBe(respuesta_esperada);
        }
    )}
)