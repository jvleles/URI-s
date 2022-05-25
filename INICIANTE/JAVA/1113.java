import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();

        while(a != b)	{
    
            if(a > b){
                System.out.println("Decrescente");
            }
            else if(a < b){
                System.out.println("Crescente");
            }

            a = sc.nextInt();
            b = sc.nextInt();
        }
        sc.close();
    }
}
