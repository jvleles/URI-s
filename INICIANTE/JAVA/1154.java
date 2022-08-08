import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        double soma = 0;
        int contador = 0;
        
        for(int i = 0; x >= 0; i++){
            soma = soma + x;
            x = sc.nextInt();
            contador++;
        }

        double media = soma/contador;
        
        System.out.println(String.format("%.2f",media));
        sc.close();
    }
}
