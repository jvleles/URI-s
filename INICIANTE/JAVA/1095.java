import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int I = 1;
        int J = 60;
        
        for(;J>=0;){
            System.out.println("I=" +I + " " + "J=" + J);
            I = I + 3;
            J = J - 5;
            
        }
        sc.close();
    }
}
