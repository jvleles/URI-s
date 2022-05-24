import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        for(int i = 0; i < N; i++){
            int x = sc.nextInt();
            int y = sc.nextInt();
            int soma = 0;

            if(x > y){
            for(int j = y + 1; j < x; j++){
                if(j % 2 != 0){
                    soma = soma + j;
                }
            }
        }
        else if(y > x){
            for(int k = x + 1; k < y; k++){
                if(k % 2 != 0){
                    soma = soma + k;
                }
            }
        }
        System.out.println(soma);
        }
        sc.close();
    }
}
