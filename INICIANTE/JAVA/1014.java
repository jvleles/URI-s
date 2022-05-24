import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int x;
        double y, kml;
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        y = sc.nextDouble();
        kml = x/y;
        System.out.println(String.format("%.3f", kml) + " km/l");
    }
}
