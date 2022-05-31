import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();

        for(int i=1;i<=N;i++){
            int x = i*i;
            int y = i*i*i;
            System.out.println(i + " " + x + " " + y);
            System.out.println(i + " " + (x + 1) + " " + (y+1));
        }
        sc.close();
    }
}
