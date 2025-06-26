function PTbac2(a,b,c) {
    if(a == 0)
    {
        if(b == 0)
        {
            if(c == 0)
            {
                console.log('phuong trinh vo so nghiem');
            }
            else
            {
                console.log('phuong trinh vo nghiem');
            }
        }
        else
        {
            x = -c/b
            console.log('phuong trinh co 1 nghiem la : ' + x);
        }
    }
    else
    {
        delta = (b*b) - (4*a*c);
        if(delta < 0 )
        {
            console.log('phuong trinh co vo nghiem')
        }
        else if(delta = 0)
        {
            x = -b/(2*a)
            console.log('phuong trinh co 1 nghiem kep x1 = x2 = ' +x)
        }
        else
        {
            x1 = (-b + Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);
            console.log(`phuong tri co 2 nghiem x1 = ${x1}, x2 = ${x2}`)
        }
    }
}
PTbac2('1','2','1')