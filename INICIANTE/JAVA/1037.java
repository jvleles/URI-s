import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double valor;
        Scanner sc = new Scanner(System.in);
        valor = sc.nextDouble();
        if( 25 >= valor && valor >= 0){
            System.out.println("Intervalo [0,25]");
        }else if( 50 >= valor && valor > 25){
            System.out.println("Intervalo (25,50]");
        }else if( 75 >= valor && valor > 50){
            System.out.println("Intervalo (50,75]");
        }else if( 100 >= valor && valor > 75){
            System.out.println("Intervalo (75,100]");
        }else if( valor > 100 || valor < 0){
            System.out.println("Fora de intervalo");
        }
        sc.close();
    }
}
