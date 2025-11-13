numbs = [42, 7, 19, 3, 88, 15, 27, 61, 5, 34]

def insertion(items:list)->list:
    for i in range(0, len(items)):

        pivot_index = i
        if pivot_index == 0:
            continue
        
        print(f"current num ${items[pivot_index]}")

        while pivot_index > 0:

            if items[pivot_index] < items[pivot_index -1]:
                # swap the items
                temp = items[pivot_index -1]
                items[pivot_index - 1] =items[pivot_index]
                items[pivot_index] = temp
                
                print(f"items: ${items}")
                
            else :
                break
            
            pivot_index = pivot_index - 1
            
        print("============================================================")

    return items

if __name__ == "__main__":
    print(f"before ${numbs}")
    print(f"after ${insertion(numbs)}")
    
