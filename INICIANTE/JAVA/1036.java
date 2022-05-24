import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double A, B, C, D, x1, x2;
        Scanner sc = new Scanner(System.in);
        A = sc.nextDouble();
        B = sc.nextDouble();
        C = sc.nextDouble();
        D = Math.pow(B, 2) - (4 * A * C);
        x1 = (-B - Math.sqrt(D)) / (2 * A);
        x2 = (-B + Math.sqrt(D)) / (2 * A);

        if (D < 0 || A == 0) {
            System.out.print("Impossivel calcular" + "\n");
        } else {
            System.out.println(String.format("R1 = %.5f", x2));
            System.out.println(String.format("R2 = %.5f", x1));
        }
        sc.close();
    }
}
