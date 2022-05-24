import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int a = 1; 
        int b = 1;
        int c;
        String x = "";
        boolean ver = true;

        if(n == 1){
            System.out.println(a);
            ver = false;
        }
        else{
            x = a + " " + b;
        }

        for(int i = 2; i < n; i++){
            c = a + b;
            x = c + " " + x;
            a = b;
            b = c;
        }
        if(ver){
        System.out.println(x);
        }
        sc.close();
    }
}
