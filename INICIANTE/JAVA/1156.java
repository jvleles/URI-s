import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
		float soma = 1, i, j;
		
		for (i = 3,j = 2;  i <= 39; i+=2,j *= 2) {
			soma += i / j;
		}
		
		System.out.println(String.format("%.2f",soma));
        sc.close();
    }
}
