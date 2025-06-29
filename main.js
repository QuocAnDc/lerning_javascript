

function PtBac3(a,b,c,d)
{
    if(a === 0)
    {
        console.log('day khong phai pt bac 3, hay thu voi pt bac 2 va bac 1');
    }
    var delta = (b*b)-(3*a*c);
    var k = ((9*a*b*c)-(2*(b*b*b))-(27*(a*a)*d))/2*Math.sqrt(Math.abs(b*b*b));
   if(delta > 0)
    {
        if(Math.abs(k) <= 0)
        {
            var theta = Math.acos(k) /3;
            var r = 2 * Math.sqrt(delta) / (3*a);
            x1 = r * Math.cos(theta) - b / (3*a);
            x2 = r * Math.cos(theta-(2*Math.PI/3))-b/(3*a);
            x3 = r * Math.cos(theta+(2*Math.PI/3))-b/(3*a);
            console.log(`x1 = ${x1}, x2 = ${x2}, x3 = ${x3}`);
        }
        else
        {
            var absk = Math.abs(k);
            var m = Math.cbrt(absk+Math.sqrt((k*k)-1));
            var n = Math.cbrt(absk-Math.sqrt((k*k)-1));
            var x = (Math.sqrt(delta)*(m*n))/(3*a*k)-b/(3*a);
            console.log(`x = ${x}`);

        }
    } 
    else if(delta===0)
    {
        var x = (-b + Math.cbrt((b*b*b)-(27*(a*a)*d))/(3*a));
        console.log(`x = ${x}`);
    }
    else
    {
        var sqrtDelta = Math.sqrt(-delta);
        var C = Math.cbrt(((b*b*b)-(27*(a*a))*d)/2);
        var x = (Math.sqrt(3)* sqrtDelta + b / (3*a));
        console.log(`x = ${x}`);

    }
}
PtBac3('2','5','2','0')