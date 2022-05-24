import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int A, B, C, D;
        Scanner sc = new Scanner(System.in);
        A = sc.nextInt();
        B = sc.nextInt();
        C = sc.nextInt();
        D = sc.nextInt();
        if(B > C && D > A && C + D > A + B && C + D > 0 && A + B > 0 && A % 2 == 0){
            System.out.print("Valores aceitos" + "\n");
                
        }else{
            System.out.print("Valores nao aceitos" + "\n");
        }
    }
} 
