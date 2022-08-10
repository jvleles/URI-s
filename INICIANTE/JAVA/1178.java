import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double x = sc.nextDouble();
        double[] lista = new double[100];
        
        for(int i = 0; i < 100; i++){
            lista[i] = x;
            x = x/2;
            System.out.printf("N[%d] = %.4f\n",i,lista[i]);
        }
        sc.close();
    }
}
