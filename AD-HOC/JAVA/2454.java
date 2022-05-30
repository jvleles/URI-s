import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int p = sc.nextInt();
        int r = sc.nextInt();

        if(p == 0){
            System.out.println("C");
        }else{
            if(r == 0){
                System.out.println("B");
            }else{
                System.out.println("A");
            }
        }
        sc.close();
    }
}
