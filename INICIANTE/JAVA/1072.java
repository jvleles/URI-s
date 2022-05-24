import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int contador = 0;
        
        for(int i = 0; i < N; i++){
            int x = sc.nextInt();
            
            if(x >= 10 && x <=20){
                contador++;
            }
        }
        
        System.out.println(contador + " in");
        System.out.println(N - contador + " out");
        sc.close();
    }
}
