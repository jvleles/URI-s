import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int y = sc.nextInt();
        String n = "";

        while(x > 0 && y > 0){
            int soma = 0;
            if(x > y){
            for(int j = y;j < x+1;j++){
                soma = soma + j;
                n = n + j + " ";
            }
        }
            else if(y > x){
            for(int k= x ;k < y+1;k++){
                    soma = soma + k;
                    n = n + k + " ";
            }
        }
        System.out.println(n+"Sum=" + soma);
        x = sc.nextInt();
        y = sc.nextInt();
        n = "";
        }
        sc.close();
    }
}
