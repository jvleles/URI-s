import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] lista = new int[20];
        int a;
        
        for(int i = 0; i < 20; i++){
            int x = sc.nextInt();
            lista[i] = x;
        }
        
        for(int k = 0; k < 10; k++){
        	a = lista[k];
            lista[k] = lista[19-k];
        	lista[19-k] = a;
        }
        for(int j = 0; j < 20; j++){
            System.out.println("N[" + j + "] = " + lista[j]);
        }
        sc.close();
    }
}
