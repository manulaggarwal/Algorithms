function insert(n){
    for(var i=0;i<n.length;i++) {
        var j=i-1;              //Consider it as left hand comparator
        while(j>=0 && n[j]>n[j+1]) {
            //swapping
            var temp = n[j+1];
            n[j+1] = n[j];
            n[j] = temp;
            j--;
        }
    }
    console.log(n);
}

insert([2,3,6,5,4,8,7,1]);