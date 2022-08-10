import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int[] lista = new int[N];
        
        for(int k = 0; k < N; k++){
            lista[k] = sc.nextInt();
        }
        
        int menor = lista[0];
        int posicao = 0;
        
        for(int i = 0; i < N; i++){
            if(lista[i] < menor){
                menor = lista[i];
                posicao = i;
            }
        }
        
        System.out.println("Menor valor: " + menor);
        System.out.println("Posicao: " + posicao);
        sc.close();
    }
}
