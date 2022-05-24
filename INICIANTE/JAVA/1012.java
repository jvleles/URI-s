import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double a, b, c, at, ac, atr, aq, ar;
        Scanner sc = new Scanner(System.in);
        double pi = 3.14159;
        a = sc.nextDouble();
        b = sc.nextDouble();
        c = sc.nextDouble();
        at = (a*c)/2;
        ac = pi*c*c;
        atr = (a + b) / 2*c;
        aq = b*b;
        ar = a*b;
        System.out.println(String.format("TRIANGULO: %.3f", at));
        System.out.println(String.format("CIRCULO: %.3f", ac));
        System.out.println(String.format("TRAPEZIO: %.3f", atr));
        System.out.println(String.format("QUADRADO: %.3f", aq));
        System.out.println(String.format("RETANGULO: %.3f", ar));
    }
}
