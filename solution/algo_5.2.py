def  missingValue(list):
    the_list = sorted(list)
    new =[]
    for i in range(min(list),(max(list)+1)):
        if i not in the_list :
            new.append(i)
    if new == []:
        new = 'null'
    return new
  
#   --------------------------------------------

def  dedupeSorted(list):
    the_list = sorted(list)
    new =[]
    for i in range(len(the_list)):
        if the_list[i] not in new :
            new.append(the_list[i])
    return new
