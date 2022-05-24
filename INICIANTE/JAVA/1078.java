import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        for(int y = 1; y <= 10; y++)	{
            int x = y*N;
            System.out.println(y + " x " + N + " = " + x);
        }
        sc.close();
    }
}
