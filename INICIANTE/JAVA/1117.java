import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        float x,media = 0,soma = 0,nv = 0;
        Scanner sc = new Scanner(System.in);
        
        while(nv != 2){
            x = sc.nextFloat();
            if(x >= 0 && x <= 10){
                nv = nv + 1;
                soma = soma + x;
            }
            else{
                System.out.println("nota invalida");
            }
        }
        media = (float) soma / 2;
        System.out.println(String.format("media = %.2f",media));
        sc.close();
    }
}
