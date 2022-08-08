import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int soma = 0;
        int k = 0;
        int j = 1;
        
        for(int i = 0; i < n; i++){
            int x = sc.nextInt();
            int y = sc.nextInt();
            
            if(x % 2 == 1){
                for(int K = 0; K < y; K++) {
        			soma = soma + x + k;
        			k+=2;
        		}
            }
            else if(x % 2 == 0){
                for(int J = 0; J < y; J++){
                    soma = soma + x + j;
                    j+=2;
                }
            }
            System.out.println(soma);
        	soma = 0;
        	k = 0;
        	j = 1;
        }
        sc.close();
    }
}
