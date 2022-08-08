import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int soma = 0;
        
        for(int i = 0; i < N; i++){
            int x = sc.nextInt();
        
            for(int k = 1; k <= x; k++){
                if(x % k == 0){
                    soma = soma + k;
                }
            }
                int y = soma - x;
                if(y == x){
                    System.out.println(x + " eh perfeito");
                }else{
                    System.out.println(x + " nao eh perfeito");
            }
            soma = 0;
        }
        sc.close();
    }
}
