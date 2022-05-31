import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int x = sc.nextInt();
        int y = sc.nextInt();
        int z = 0;
        String s = "";

        for(int i=1;i<=y;i++){
            s = s + i;
            z++;
    
            if(z == x){
                System.out.println(s);
                z = 0;
                s = "";
            }else{
                s = s + " ";
            }
        }
        sc.close();
    }
}
