import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int soma = 0;
        int k = 0;
        int j = 1;
        
        while(x != 0){
            if(x % 2 == 0){
                for(int K = 0; K < 5; K++) {
        			soma = soma + x + k;
        			k+=2;
        		}
            }
            else if(x % 2 != 0){
                for(int J = 0; J < 5; J++){
                    soma = soma + x + j;
                    j+=2;
                }
            }
            System.out.println(soma);
            soma = 0;
        	k = 0;
        	j = 1;
            x = sc.nextInt();
        }
        sc.close();
    }
}
