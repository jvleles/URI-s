import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int a = 0 ;
        int b = 1;
        int c;
        String x = "";

        if(n == 1){
            System.out.println(a);
        }
        else{
            x = a + " " + b;
        }

        for(int i = 2; i < n; i++){
            c = a + b;
            x = x + " " + c;
            a = b;
            b = c;
        }
        System.out.println(x);
        sc.close();
    }
}
