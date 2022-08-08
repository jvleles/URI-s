import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int x;
        
        for(int i = 0; i < N; i++){
            x = sc.nextInt();
            int saiu = 0;
            for(int y = 2; y < x; y++){
                if(x % y == 0){
                    System.out.println(x + " nao eh primo");
                    saiu = 1;
                    break;
                }
            }
            if(saiu == 0){
                System.out.println(x + " eh primo");
            }
        }
        sc.close();
    }
}
