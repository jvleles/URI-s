import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int a, b, c, d;
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        b = sc.nextInt();
        c = sc.nextInt();
        d = sc.nextInt();

        if(c > a && d > b){
            System.out.println("O JOGO DUROU " + (c - a) + " HORA(S)" + " E " + (d - b) + " MINUTO(S)");
        }
        else if(a == b && c == d && a == c){
            System.out.println("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
        }
        else if(c > a && b > d){
            System.out.println("O JOGO DUROU " + (c-a-1) + " HORA(S) E " + (60 - b + d) + " MINUTO(S)");
        }
        else if(a > c && d > b){
            System.out.println("O JOGO DUROU " + (24-a+c) + " HORA(S) E " + (d - b) + " MINUTO(S)");
        }
        else if(a > c && b > d){
            System.out.println("O JOGO DUROU " + (24 - a + c -1) + " HORA(S) E " + (60 - b + d) + " MINUTO(S)");
        }
        else if(a == c && d > b){
            System.out.println("O JOGO DUROU 0 HORA(S) E " + (d - b) + " MINUTO(S)");
        }
        else if(a == c && b > d){
            System.out.println("O JOGO DUROU 23 HORA(S) E " + (60 - b + d) + " MINUTO(S)");
        }
        sc.close();
    }
}
