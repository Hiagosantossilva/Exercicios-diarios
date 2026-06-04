package java_curso;

public class Main {
    public static void main(String[] args) {
        Carro meuCarro = new Carro("Fusca");
        System.out.println(meuCarro.getModelo());
        meuCarro.acelerar();

        Carro meuCarro2 = new Carro("Sandero");
        System.out.println(meuCarro2.getModelo());
        meuCarro2.acelerar();
    }
}