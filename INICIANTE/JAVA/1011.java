import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double r, v;
        Scanner sc = new Scanner(System.in);
        double pi = 3.14159;
        r = sc.nextDouble();
        v = (4.0 / 3) * pi * Math.pow(r, 3.0);
        System.out.println(String.format("VOLUME = %.3f", v));
    }
} 
