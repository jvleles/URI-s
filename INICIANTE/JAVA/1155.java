import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double x = 1;
        double soma = 0;
        
        for(int i = 1; i <= 100; i++){
            double y = x / i;
            soma = soma + y;
        }
        
        System.out.println(String.format("%.2f",soma));
        sc.close();
    }
}
