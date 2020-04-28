import java.math.BigInteger;
import java.util.Scanner;

class Zadanie2 {
    public static void main(String []args){
        Scanner scanner = new Scanner(System.in);

        int t = scanner.nextInt();

        for(int i = 0; i < t; i++){
            int p0 = scanner.nextInt();
            int p1 = scanner.nextInt();
            int q = scanner.nextInt();
            int n = scanner.nextInt();

            if(GetNumber(p0, p1, q, n).mod(BigInteger.valueOf(q)).equals(BigInteger.valueOf(0)))
                System.out.println("YES");
            else
                System.out.println("NO");
        }
    }

    public static BigInteger GetNumber(int p0, int p1, int q, int n){
        if(n==1)
            return BigInteger.valueOf(p0);
        if(n==2)
            return BigInteger.valueOf(10 * p0 + p1);
        String s = "" + p0;
        s += p1;
        int z;
        for(int i = 2; i < n; i++){
            z = (4*p1 + p0) % q;
            p0 = p1;
            p1 = z;
            s += z;
        }
        return new BigInteger(s);
    }
}
