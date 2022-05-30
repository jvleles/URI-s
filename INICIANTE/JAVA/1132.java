import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int y = sc.nextInt();
        int soma = 0;

        if(x > y){
            for(int j= y ;j < x+1;j++){
                if(j%13 != 0){
                    soma = soma + j;
                }
            }
        }
        else if(y > x){
            for(int k= x ;k < y+1;k++){
                if(k%13 != 0){
                    soma = soma + k;
                }
            }
        }
        System.out.println(soma);
        sc.close();
    }
}
