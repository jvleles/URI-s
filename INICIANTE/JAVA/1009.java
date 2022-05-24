import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nome = sc.next();
        double salariof = sc.nextDouble();
        double vendasmes = sc.nextDouble();
        double salariofinal = salariof + (vendasmes*15 / 100);
        System.out.print(String.format("TOTAL = R$ %.2f" , salariofinal) + "\n");
    }
} 
