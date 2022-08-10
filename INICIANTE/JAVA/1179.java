import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] par = new int[5];
        int cp = 0;
        int[] impar = new int[5];
        int ci = 0;
        
        for(int i = 0; i < 15; i++){
            int x = sc.nextInt();
            if(x % 2 == 0){
                par[cp] = x;
                cp++;
            }else{
                impar[ci] = x;
        		ci++;
            }
            
            if(cp == 5){
                cp = 0;
                for(int j = 0; j < 5; j++){
                    System.out.printf("par[%d] = %d\n",j,par[j]);
                }
            }
            if(ci == 5){
                ci = 0;
                for(int k = 0; k < 5; k++){
                    System.out.printf("impar[%d] = %d\n",k,impar[k]);
                }
            }
        }
        
        for(int g = 0; g < ci; g++){
            System.out.printf("impar[%d] = %d\n",g,impar[g]);
        }
        
        for(int l = 0; l < cp; l++){
            System.out.printf("par[%d] = %d\n",l,par[l]);
        }
        sc.close();
    }
}
