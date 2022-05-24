import java.util.Scanner;

public class Main {
	
    public static void main(String[] args){
    	Scanner leitor = new Scanner(System.in);
    	int Ca = leitor.nextInt();
    	int Ba = leitor.nextInt();
    	int Pa = leitor.nextInt();
    	int Cr = leitor.nextInt();
    	int Br = leitor.nextInt();
    	int Pr = leitor.nextInt();
    	int semComida = 0;
    	if (Cr > Ca) semComida += Cr - Ca;
    	if (Br > Ba) semComida += Br - Ba;
    	if (Pr > Pa) semComida += Pr - Pa;
    	System.out.println(semComida);
    }
	
}
