import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int dias;
        Scanner sc = new Scanner(System.in);
        dias = sc.nextInt();
        int anos = dias / 365;
        int meses = (dias % 365) / 30;
        int dia = (dias % 365) % 30;
 
        System.out.print(anos + " ano(s)" + "\n");
        System.out.print(meses + " mes(es)" + "\n");
        System.out.print(dia + " dia(s)" + "\n");
    }
} 
