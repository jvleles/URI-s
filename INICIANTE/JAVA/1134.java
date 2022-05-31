import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int a = 0;
        int g = 0;
        int d = 0;

        for(;n != 4;){
            if(n == 1){
                a++;
            }
            else if(n == 2){
                g++;
            }
            else if(n == 3){
                d++;
            }
            n = sc.nextInt();
        }
        System.out.println("MUITO OBRIGADO");
        System.out.println("Alcool: " + a);
        System.out.println("Gasolina: " + g);
        System.out.println("Diesel: " + d);
        sc.close();
    }
}
