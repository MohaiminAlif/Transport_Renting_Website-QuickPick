
function confirm() {

              
    var name = document.getElementById("name").value;
    var driver = document.getElementById("driver").value;

    var loc = document.getElementById("location").value;
    var tDis = parseInt(document.getElementById("totalDistance").value);
    
    var trans = document.getElementById("trans").value;

 

    var sum = 0;

    if(trans == "car" ){

        for(var i = 0; i < 50; i++){
      
            if(tDis > 0)
            {
                sum = sum +10;
                tDis--;
            }
        }

        for(var i=0; i < 30; i++){

            if(tDis > 0)
            {
                sum = sum +8;
                tDis--;
            }
        
        }
         
        for(var i=0; i < 100; i++){

            if(tDis > 0)
            {
                sum = sum +6;
                tDis--;
            }
        
        }

        for(var i=0; i < tDis; i++){

            if(tDis > 0)
            {
                sum = sum +5;
   
            }
        
        }

        if(driver == "driverReq") sum = sum+1000; 

    }
    else if(trans =="bike" ){

        for(var i = 0; i < 50; i++){

            if(tDis > 0)
            {
                sum = sum + 5;
                tDis--;
            }
        }

        for(var i=0; i < 30; i++){

            if(tDis > 0)
            {
                sum = sum + 4;
                tDis--;
            }
        
        }
         
        for(var i=0; i < 100; i++){

            if(tDis > 0)
            {
                sum = sum + 3;
                tDis--;
            }
        
        }

        for(var i=0; i < tDis; i++){

            if(tDis > 0)
            {
                sum = sum +2;
   
            }
        
        }

    
        if(driver == "driverReq") sum = sum+500; 
    }



    document.getElementById("text").innerHTML = "Hello "+ name +" Your total travel expense will be <b>" + sum + "</b>, and your transportation will be ready and delivered to you at " + loc;


}




