import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int I = 1;
        int J = 7;
        
        for(int i=0;i<5;i++){
            for(int k = 0;k<3;k++){
                System.out.println("I=" + I + " J=" + J);
                J = J - 1;
            }
            J = J + 5;
            I = I + 2;
        }
        sc.close();
    }
}
