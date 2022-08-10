import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int[] lista = new int[1000];
        int k;
        
        for(int i = 0; i < 1000;){
            for(k = 0; k < x && i < 1000;k++){
                lista[i] = k;
                System.out.printf("N[%d] = %d\n" ,i,lista[i]);
                i++;
            }
            k = 0;
        }
        sc.close();
    }
}
