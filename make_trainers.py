for i in range(2,21):
    outf = open(f"trainer-{i}.html","w")
    inf = open("trainer.html","r").read()
    outf.write(inf.replace("{{n}}",str(i)))
    
