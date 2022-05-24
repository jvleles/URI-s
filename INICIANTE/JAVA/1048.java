import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double a;
        Scanner sc = new Scanner(System.in);
        a = sc.nextDouble();

        if(a < 400 || a == 400){
            System.out.println(String.format("Novo salario: %.2f" , (a + a*0.15)));
            System.out.println(String.format("Reajuste ganho: %.2f" , (a*0.15)));
            System.out.println("Em percentual: 15 %");
            }
            else if(a > 400 && a < 800 || a == 800){
                System.out.println(String.format("Novo salario: %.2f" , (a + a*0.12)));
                System.out.println(String.format("Reajuste ganho: %.2f" , (a*0.12)));
                System.out.println("Em percentual: 12 %");
            }
            else if(a > 800 && a < 1200 || a == 1200){
                System.out.println(String.format("Novo salario: %.2f" , (a + a*0.10)));
                System.out.println(String.format("Reajuste ganho: %.2f" , (a*0.10)));
                System.out.println("Em percentual: 10 %");
            }
            else if(a > 1200 && a < 2000 || a == 2000){
                System.out.println(String.format("Novo salario: %.2f" , (a + a*0.07)));
                System.out.println(String.format("Reajuste ganho: %.2f" , (a*0.07)));
                System.out.println("Em percentual: 7 %");
            }
            else if(a > 2000){
                System.out.println(String.format("Novo salario: %.2f" , (a + a*0.04)));
                System.out.println(String.format("Reajuste ganho: %.2f" , (a*0.04)));
                System.out.println("Em percentual: 4 %");
            }
        sc.close();
    }
}
