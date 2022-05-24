import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double a, b, c, perimetro, area;
        Scanner sc = new Scanner(System.in);
        a = sc.nextDouble();
        b = sc.nextDouble();
        c = sc.nextDouble();
        perimetro = a + b + c;
        area = (a + b)*c / 2;

        if( a < b + c &&  b < a + c && c < a + b){
            System.out.println(String.format("Perimetro = %.1f" , perimetro));
        }
        else{
            System.out.println(String.format("Area = %.1f" , area));
        }
        sc.close();
    }
}
