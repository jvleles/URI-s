import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();

        for(int i = 0; i < N; i++){
            int x = sc.nextInt();
            int y = sc.nextInt();
    
            if(y == 0){
                System.out.println("divisao impossivel");
            }
            else{
                System.out.println((double) x / y);
            }
        }
        sc.close();
    }
}
