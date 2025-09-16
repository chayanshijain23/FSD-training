#include <stdio.h>

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    // Quick Sort implementation without function calling
    int low = 0, high = n - 1;
    int stack[n];

    // Initialize stack
    int top = -1;
    stack[++top] = low;
    stack[++top] = high;

    // Iterative QuickSort
    while (top >= 0) {
        // Pop high and low
        high = stack[top--];
        low = stack[top--];

        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int pi = i + 1;
        int temp = arr[pi];
        arr[pi] = arr[high];
        arr[high] = temp;

        // Push left side to stack
        if (pi - 1 > low) {
            stack[++top] = low;
            stack[++top] = pi - 1;
        }

        // Push right side to stack
        if (pi + 1 < high) {
            stack[++top] = pi + 1;
            stack[++top] = high;
        }
    }

    // Print sorted array
    printf("Sorted array: \n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
