import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int pa = 0;
        int im = 0;
        int po = 0;
        int ne = 0;
        
        for(int i=0;i<5;i++){
            int x = sc.nextInt();
            if(x % 2 == 0){
                pa = pa + 1;
            }
            else if(x % 2 != 0){
                im = im + 1;
            }
            if(x > 0){
                po = po + 1;
            }
            if(x < 0){
                ne = ne + 1;
            }
        }
        System.out.println(pa + " valor(es) par(es)");
        System.out.println(im + " valor(es) impar(es)");
        System.out.println(po + " valor(es) positivo(s)");
        System.out.println(ne + " valor(es) negativo(s)");
        sc.close();
    }
}
