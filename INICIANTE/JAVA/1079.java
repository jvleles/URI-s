import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        for(int i = 0; i < N; i++)	{
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = sc.nextDouble();
            double media = (2*a + 3*b + 5*c) / 10;
            System.out.println(String.format("%.1f" , media));
        }
        sc.close();
    }
}
