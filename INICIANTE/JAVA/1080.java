import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int y = 0;
        int posicao = 1;

		for (int i = 1; i <= 100; i++) {
			int x = sc.nextInt();
			if (i == 1) {
				y = x;
				posicao = 1;
			} else if (x > y) {
				y = x;
				posicao = i;
			}
		}
        System.out.println(y);
        System.out.println(posicao);
        sc.close();
    }
}
