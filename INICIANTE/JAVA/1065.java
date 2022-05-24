import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int c = 0;

        for(int i=0;i<5;i++){
            int x = sc.nextInt();
            if(x % 2 == 0){
            c = c + 1;
            }
        }
        System.out.println(c + " valores pares");
        sc.close();
    }
}
