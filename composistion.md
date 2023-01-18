# programming composition

I realized that:

when you have a series f1, f2, f3 which looks like

    def f1(arg):
        return some_computaiton_1(arg)
        
    def f2(result_f1):
        return some_computation_2(result_f1)
        
    def f3(result_f2):
        reutrn some_computation_3(result_f2)
        
    print(f1(f2(f3(args))))
    
it worth rewrite like this

    def f1(arg):
        return  some_operation1(arg)
     
    def f2(arg):
        result_f1 = f1(arg)
        return some_operation(result_f1)
    
    def f3(arg):
        result_f2 = f2(arg)
        return some_operation(result_f2)
    
    print(f3(arg))
