import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int x, y, z;
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        y = sc.nextInt();
        z = sc.nextInt();
        
        if(x > y && x > z && y > z){
            System.out.println(z);
            System.out.println(y);
            System.out.println(x);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        else if(x > y && x > z && y < z){
            System.out.println(y);                                              	
            System.out.println(z);
            System.out.println(x);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        else if(y > x && x > z && y > z){
            System.out.println(z);
            System.out.println(x);
            System.out.println(y);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        else if(y > x && z > x && y > z){
            System.out.println(x);
            System.out.println(z);
            System.out.println(y);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        else if(z > x && z > y && y > x){
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        else if(z > x && z > y && x > y){
            System.out.println(y);
            System.out.println(x);
            System.out.println(z);
            System.out.println("");
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }
        sc.close();
    }
}
