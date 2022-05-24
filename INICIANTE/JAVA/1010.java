import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int A, B;
        double C, X;
        Scanner sc = new Scanner(System.in);
        A = sc.nextInt();
        B = sc.nextInt();
        C = sc.nextDouble();
        X = B * C;

        A = sc.nextInt();
        B = sc.nextInt();
        C = sc.nextDouble();
        X += B * C;
        System.out.print(String.format("VALOR A PAGAR: R$ %.2f" , X) + "\n");
    }
} 
