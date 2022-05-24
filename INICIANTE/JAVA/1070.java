import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int X = sc.nextInt();

        for(int numero = X;	X % 2 != 0 && numero <= X + 10;	numero = numero + 2)	{
            System.out.println(numero);
        }
        
        for(int numero = X + 1;	X % 2 == 0 && numero <= X + 11 ; numero = numero + 2)	{
            System.out.println(numero);
        }
        sc.close();
    }
}
