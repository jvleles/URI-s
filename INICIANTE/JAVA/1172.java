import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] lista = new int[10];

        for(int i = 0; i < lista.length; i++){
            lista[i] = sc.nextInt();
            if(lista[i] > 0){
                System.out.println("X[" + i + "] = " + lista[i]);
            }else{
                System.out.println("X[" + i + "] = " + 1);
            }
        }
        sc.close();
    }
}
