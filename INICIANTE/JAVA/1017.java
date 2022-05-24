import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int tempo, velocidade;
        double distancia, litros;
        Scanner sc = new Scanner(System.in);
        tempo = sc.nextInt();
        velocidade = sc.nextInt();
        distancia = tempo*velocidade;
        litros = distancia / 12;
        System.out.println(String.format("%.3f", litros));
    }
}
