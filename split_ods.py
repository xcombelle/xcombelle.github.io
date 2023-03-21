import os
from collections import defaultdict

d={}
def add(line,f):
    global d
    if f not in d:
        d[f]=open(f"{f}","w")
    print(line,file=d[f])
for line in open("ods8.txt"):
    line = line.strip()
    add(line, f"ods/{len(line)}.txt")
                 
