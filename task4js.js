function validate()
{
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;

    if(name == "")
    {
        document.getElementById('result').innerHTML = '<p>Name field must be required</p>'
    }
    else if(age == "")
    {
        document.getElementById('result').innerHTML = '<p>Age field must be required</p>'   
    }
    else if(weight == "")
    {
        document.getElementById('result').innerHTML = '<p>Weight field must be required</p>'
    }
    else if(age < 5)
    {
        document.getElementById('result').innerHTML = '<p>Hello ' + name + ' !!! Your age is must should be 5</p>'
    }


    if((age > 4) && (age < 8))
    {
        if((weight >= 15) && (weight <= 20))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is perfect</p>'
        }
        else if(weight < 15)
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is less than recommended value of 15KG at an age of '+ age+'.</p>' 
        }
        else
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is greater than recommended value of 20KG at an age of ' +age +'.</p>'
        }
    }
    else if((age > 7) && (age < 11))
    {
        if((weight >= 21) && (weight <= 25))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is perfect</p>' 
        }
        else if((weight < 21))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is less than recommended value of 21KG at an age of '+age+'.</p>'
        }
        else
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is greater than recommended value of 25KG at an age '+age+'.</p>'
        }
    }
    else if((age > 10) && (age < 16))
    {
        if((weight >= 26) && (weight <= 30))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is perfect</p>'
        }
        else if((weight < 26))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is less than recommended value of 26KG at an age of '+age+'.</p>' 
        }
        else
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is greater than recommended value of 30KG at an age of '+age+'.</p>'
        }
    }
    else if((age > 15) && (age < 21))
    {
        if((weight >= 31) && (weight <= 40))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is perfect</p>'
        }
        else if((weight < 31))
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is less than recommended value of 31KG at an age of  '+age+'.</p>'
        }
        else
        {
            document.getElementById('result').innerHTML = '<p>Hello ' + name.toUpperCase() + ' !!! Your weight is greater than recommended value of 40KG at an age of '+age+'.</p>'
        }
    }
}