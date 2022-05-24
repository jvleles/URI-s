import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int a, b;
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        b = sc.nextInt();

        if(b > a){
            System.out.println("O JOGO DUROU " + (b - a) + " HORA(S)");
        }
        else if(a == b){
            System.out.println("O JOGO DUROU 24 HORA(S)");
        }
        else if(a > b){
            System.out.println("O JOGO DUROU " + (24 - a + b) + " HORA(S)");
        }
        sc.close();
    }
}
