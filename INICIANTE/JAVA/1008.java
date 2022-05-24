import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        float C = sc.nextFloat();
        float salario = B * C;
        System.out.print("NUMBER = " + A +"\n");
        System.out.println(String.format("SALARY = U$ %.2f" , salario));
    }
} 
