import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double a, b, c;
        Scanner sc = new Scanner(System.in);
        a = sc.nextDouble();
        b = sc.nextDouble();
        c = sc.nextDouble();

        if(a >= (b+c) || b >= (a+c) || c >= (a+b)){
                System.out.println("NAO FORMA TRIANGULO");
            }
            else if(Math.pow(a,2) == (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) == (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) == (Math.pow(a,2) + Math.pow(b,2))){
                System.out.println("TRIANGULO RETANGULO");
            }
            else if(Math.pow(a,2) > (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) > (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) > (Math.pow(a,2) + Math.pow(b,2))){
                System.out.println("TRIANGULO OBTUSANGULO");
            }
            else if(Math.pow(a,2) < (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) < (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) < (Math.pow(a,2) + Math.pow(b,2))){
                System.out.println("TRIANGULO ACUTANGULO");
            }
            if(a == b && a == c){
                System.out.println("TRIANGULO EQUILATERO");
            }
            if((a == b && a != c)  || (a == c && a != b) || (b == c && b != a)){
                System.out.println("TRIANGULO ISOSCELES");
            }
        sc.close();
    }
}
