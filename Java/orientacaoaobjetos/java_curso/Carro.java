package java_curso;

public class Carro {
    private String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;    
    }

    public void acelerar() {
        System.out.println("Acelerando o carro " + this.modelo);
    }

    public String getModelo() {
        return modelo;
    }
}