import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int pares =	2;
        while(pares	<=	100){
            System.out.println(pares);
	        pares =	pares +	2;
        }
        sc.close();
    }
}
