import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int i = 1;
        int x = 0;

        for(;x != N;i = i + 4){
            System.out.println(i + " " + (i+1) + " " + (i+2) + " PUM");
            x++;
        }
        sc.close();
    }
}
