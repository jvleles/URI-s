import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        String s = "";

        while(x != 0){
            s = "";
            for(int i=1;i<x;i++){
                s = s + i + " ";
            }
            s = s + x;
            System.out.println(s);
            x = sc.nextInt();
        }
        sc.close();
    }
}
