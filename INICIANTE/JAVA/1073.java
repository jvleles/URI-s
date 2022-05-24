import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int X = sc.nextInt();

        for(int numero = 2;numero <= X;	numero = numero + 2)	{
            System.out.println(numero + "^2 = " + numero*numero);
        }
        sc.close();
    }
}
