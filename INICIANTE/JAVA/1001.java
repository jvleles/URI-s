import java.util.Scanner;
public class Main {
 public static void main(String[] args) {
      int A, B, X;
      Scanner sc = new Scanner(System.in);
      A = sc.nextInt();                     //take input for A
      B = sc.nextInt();                    //take input for  B
      X = A + B;                           //Basic summation X = A + B
      System.out.print("X = "+X+"\n");    //Hardly advised to give \n at last
   }
}
