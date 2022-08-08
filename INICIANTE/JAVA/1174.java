import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double[] lista = new double[100];
        
        for(int i = 0; i < 100; i++){
            double x = sc.nextDouble();
            lista[i] = x;
            
            if(lista[i] <= 10){
                System.out.println(String.format("A[%d] = %.1f",i,lista[i]));
            }
        }
        sc.close();
    }
}
