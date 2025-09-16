#include <stdio.h>
void main()
{
    int arr[100] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = 10;

    printf("MENU \n");
    printf("PRESS 1 FOR INSERTION \n");
    printf("PRESS 2 FOR DELELTION \n");
    int n;   // choice for insertion or deletion
    int n1;  // choice for insertion
    int num; // number for insertion

    scanf("%d", &n);
    switch (n)
    {
    case 1:
    {
        printf("MENU \n");
        printf("PRESS 1 FOR INSERTION AT BEGINING \n");
        printf("PRESS 2 FOR INSERTION AT GIVEN INDEX \n");
        printf("PRESS 3 FOR INSERTION AT END \n");
        scanf("%d", &n1);
        printf("ENTER THE NUMBER YOU WANT TO INSERT \n");
        scanf("%d", &num);
        switch (n1)
        {
        case 1:
        {
            // insertion at begining
            for (int i = 10; i >= 0; i--)
            {
                arr[i] = arr[i - 1];
            }
            arr[0] = num;
            size++;
            break;
        }

        case 2:
        {
            int k; // index position for insertion
            // insertion at a given index
            printf("enter the index between 0 to 9 \n");
            scanf("%d", &k);
            for (int i = 10; i >= k; i--)
            {
                arr[i] = arr[i - 1];
            }
            arr[k] = num;
            size++;
            break;
        }
        case 3:
        {
            // insertion at the end
            arr[10] = num;
            size++;
            break;
        }
        }
        break;
    }
    case 2:
    {
        printf("MENU \n");
        printf("PRESS 1 FOR DELETION AT BEGINING \n");
        printf("PRESS 2 FOR DELETION AT GIVEN INDEX \n");
        printf("PRESS 3 FOR DELETION AT END \n");
        scanf("%d", &n1);
        switch (n1)
        {
        case 1:
        {
            for (int i = 0; i < size; i++)
            {
                arr[i] = arr[i + 1];
            }
            size--;
            break;
        }
        case 2:
        {
            int k; // index position for deletion
            // deletion at a given index
            printf("enter the index between 0 to 9 \n");
            scanf("%d", &k);
            for (int i = k; i < size; i++)
            {
                arr[i] = arr[i + 1];
            }
            size--;
            break;
        }
        case 3:
        {
            size--;
            break;
        }
        }
        break;
    }
    }
    printf("new array \n");

    for (int i = 0; i < size; i++)
    {
        printf(" %d ", arr[i]);
    }
}

