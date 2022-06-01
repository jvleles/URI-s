import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int z = sc.nextInt();
        int soma = 0;
        int contador = 0;

        while(x >= z){
            z = sc.nextInt();
        }

        for(;soma <= z; x++){
            soma = soma + x;
            contador += 1;
        }
        System.out.println(contador);
        sc.close();
    }
}
