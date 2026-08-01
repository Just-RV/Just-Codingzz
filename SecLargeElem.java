public class SecLargeElem {
  public static void main(String[] args) {

    int[] A = { 5, Integer.MIN_VALUE };
    Integer large = null;
    Integer secLarge = null;

    if (A.length < 2) {
      System.out.println("Problem");
      return;
    } else {
      for (int i = 0; i < A.length; i++) {
        // Corrected order: check null before >
        if (large == null || A[i] > large) {
          secLarge = large;
          large = A[i];
        } else if (A[i] != large && (secLarge == null || A[i] > secLarge)) {
          secLarge = A[i];
        }
      }
    }

    if (secLarge == null) {
      System.out.println("second lergest elemnt not found");
    } else {
      System.out.println("Largest: " + large);
      System.out.println("Second largest: " + secLarge);
    }
  }
}