import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int[] lista = new int[10];
        
        for(int i = 0; i < 10; i++){
            lista[i] = x;
            x = x*2;
            System.out.println("N[" + i + "] = " + lista[i]);
        }
        sc.close();
    }
}
