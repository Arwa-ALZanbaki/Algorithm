def isAnagram(strA, starB):

    if (len(strA) != len(starB)):
        return False
      
    if(sorted(strA.lower())== sorted(starB.lower())):
        return True
    else:
        return False 
