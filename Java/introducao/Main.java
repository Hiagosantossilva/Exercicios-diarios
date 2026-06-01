import java.util.ArrayList;

public class Main{
    public static void main(String[] args) {
        //-------------------Tipos-------------------

        byte b = 100;
        short s = 10000;
        int i= 1000000;
        long l = 10000000L;
        float f = 10.5f;
        double d = 20.5;
        char c = 'A';
        String str = "Fernanda";
        boolean bool = false;

        //-------------------Vetores-------------------

        //Array
        int[] colecaoDeInteiros = {1, 2, 3, 4, 5};
        colecaoDeInteiros[3] = 2;
        int[] meusNumeros = new int[10];

        //Array List
        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("Fernanda");
        nomes.add("Maria");
        nomes.add("Roberto");
        nomes.add("Clara");
        nomes.add("Capitão Pátria");

        System.out.println(nomes.get(1));
        nomes.remove(0);

        //-------------------Condicionais-------------------

        if (str.equals("Pedro")) {
            System.out.println("Verdadeiro");
        }
        else if (str.equals("Fernanda")){
            System.out.println("Verdadeiro");
        }
        else{
            System.out.println("Falso");
        }
    }

}

