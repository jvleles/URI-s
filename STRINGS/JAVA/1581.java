import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = 0;
        int K = 0;
        int equals = 0;
        String[] line = null;
 
        N = sc.nextInt();
        while (N > 0){
            K = sc.nextInt();
            line = new String[K];
 
            for (int i = 0; i < K; i++)
            {
                line[i] = sc.next();
                if (i > 0)
                {
                    if (line[i].equalsIgnoreCase(line[i - 1]))
                    {
                        equals++;
                    }
                }
            }
            N--;
 
            if (K == (equals + 1))
                System.out.print(line[0] + "\n");
            else
                System.out.print("ingles\n");

            equals = 0;
        }
        sc.close();
    }
}
