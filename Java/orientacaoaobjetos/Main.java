public class Main {
    public static void main(String[] args) {
        Carro meuCarro = new Carro("Fusca");
        System.out.println(meuCarro.modelo);
        meuCarro.acelerar();

        Carro meuCarro2 = new Carro("Sandero");
        System.out.println(meuCarro2.modelo);
        meuCarro2.acelerar();


    }
}

class Carro {
    String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;    
    }
    public void acelerar(){
        System.out.println("Acelerando o carro" + " " + this.modelo);
    }
}