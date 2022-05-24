import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double salario, pagar;
        Scanner sc = new Scanner(System.in);
        salario = sc.nextDouble();

        if(salario >= 0 && salario <= 2000){
            System.out.println("Isento");
        }
        else if(salario > 2000 && salario <= 3000){
            pagar = (salario - 2000)*0.08;
            System.out.println(String.format("R$ %.2f" , pagar));
        }
        else if(salario > 3000 && salario <= 4500){
            pagar = (salario - 3000)*0.18 + 1000*0.08;
            System.out.println(String.format("R$ %.2f" , pagar));
        }
        else if(salario > 4500){
            pagar = (salario - 4500)*0.28 + 1500*0.18 + 1000*0.08;
            System.out.println(String.format("R$ %.2f" , pagar));
        }
        sc.close();
    }
}
