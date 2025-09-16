importjava.lang.*;
class JaggedArray{
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        int r =sc.nextInt();
        int a[][]=new int [r][];
        System.out.println("Enter the size of 1st row");
        a[0]=new int[Sc.nextInt()];
        a[1]=new int[Sc.nextInt()];
        a[2]=new int[Sc.nextInt()];
        System.out.println("Enter the Elements of Array");
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<a[i].length;j++)
            {
                a[i][j]=sc.nextInt();
            
            }
        }
        System.out.println("Display the Elements");
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<a[i].length;j++){
                System.out.println(a[i][j]+ " ");
            }
            System.out.println();
        }
    }
}