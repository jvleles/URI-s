import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int contador =	0;

        for(int i=0;i<6;i++){
            double x = sc.nextDouble();
            if(x > 0){
            contador ++;
            }
        }
        System.out.println(contador + " valores positivos");
        sc.close();
    }
}
