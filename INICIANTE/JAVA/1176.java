import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n, k;
        long x[] = new long[100];
        n = sc.nextInt();
        x[0] = 0;
        x[1] = 1;
        
        for(int j = 2; j < 61; j++){
                x[j] = x[j-2] + x[j-1];
        }

        for(int i = 0; i < n; i++){
                k = sc.nextInt();
                System.out.printf("Fib(%d) = %d\n", k, x[k]);
        }
        sc.close();
    }
}
