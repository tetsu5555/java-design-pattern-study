import java.util.Random;

public class RandomNumberGenerator extends NumberGenerator {
    private Random randm = new Random();
    private int number;
    public int getNumber() {
        return number;
    }
    public void execute() {
        for (int i = 0; i < 20; i++) {
            number = randm.nextInt(50);
            notifyObservers();
        }
    }
}
