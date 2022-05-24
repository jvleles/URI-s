import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int X = sc.nextInt();

        int	impares	= 1;
        while(impares <= X){
            System.out.println(impares);
            impares = impares +	2;
        }
        sc.close();
    }
}
