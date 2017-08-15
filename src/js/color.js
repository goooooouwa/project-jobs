function color() {
    var a =document.getElementById("rightSideWindow");
    a.innerHTML=`
<br><div>
         <b style="font-size: 30px;margin-left: 18px">Pure Color</b><br><br>
         <div class="container-fluid">
         <div class="row">
         <div class="col-md-2">
              <button onclick="document.getElementById('colorChange').style.background='red'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:rgb(255,0,0);width: 80px;height: 35px"></button>
              <p style="margin-left: 20px">&nbsp;Red</p>
              <button onclick="document.getElementById('colorChange').style.background='darkcyan'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:darkcyan;width: 80px;height: 35px"></button>
              <p style="margin-left: 15px">&nbsp;Cyan</p>
              </div>         
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='rgb(255,69,0)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:rgb(255,69,0);width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -3px">Orange Red</p>
              <button onclick="document.getElementById('colorChange').style.background='mediumblue'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:mediumblue;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -8px">Medium Blue</p>
</div>
         <div class="col-md-2"style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='rgb(255,230,0)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:rgb(255,230,0);width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>Dandelion</p>
              <button onclick="document.getElementById('colorChange').style.background='rgb(65,150,225)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:rgb(65,150,225);width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>Royal Blue</p>
</div>         
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='forestgreen'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:forestgreen;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -5px">Forest Green</p>
              <button onclick="document.getElementById('colorChange').style.background='slateblue'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:slateblue;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>&nbsp;Slate Blue</p>
</div>
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='black'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:black;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -5px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Black</p>
              <button onclick="document.getElementById('colorChange').style.background='rgb(169,169,169)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background:rgb(169,169,169);width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>&nbsp;Dark Grey</p>
</div>
         <div class="col-md-2"></div>
         </div>
        </div>
         <br>
         <b style="font-size: 30px;margin-left: 18px">Pattern</b><br><br>
         <div class="container-fluid">
         <div class="row">
         <div class="col-md-2">
              <button onclick="document.getElementById('colorChange').style.background='url(../images/aurora.jpg)';"  class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/aurora.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>
              <p style="margin-left: 15px">Aurora</p>
              <button onclick="document.getElementById('colorChange').style.background='url(../images/rocky.jpg)'"class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/rocky.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>
              <p style="margin-left: 15px">Rocky</p>
              </div>         
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='url(../images/desertkiss.jpg)'"class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/desertkiss.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -3px">Desert Kiss</p>
              <button onclick="document.getElementById('colorChange').style.background='url(../images/sun.jpg)'"class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/sun.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -8px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun</p>
</div>
         <div class="col-md-2"style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='url(../images/elixir.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/elixir.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="font-size: 16px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elixir</p>
              <button onclick="document.getElementById('colorChange').style.background='url(../images/painting.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/painting.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="font-size: 16px">&nbsp;&nbsp;Painting</p>
</div>         
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='url(../images/glasspane.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/glasspane.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="margin-left: -5px">Glass Pane</p>
              <button onclick="document.getElementById('colorChange').style.background='url(../images/lake.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/lake.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lake</p>
</div>
         <div class="col-md-2" style="margin-left: -60px">
              <button onclick="document.getElementById('colorChange').style.background='url(../images/meadow.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/meadow.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="font-size: 16px;margin-left: -5px">&nbsp;&nbsp;Meadow</p>
              <button onclick="document.getElementById('colorChange').style.background='url(../images/morning.jpg)'" class="btn btn-default btn-lg" type="button" style="border-radius:6px;background-image:url('../images/morning.jpg');background-size:100% 100%;width: 80px;height: 35px"></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <p style="font-size: 16px">&nbsp;&nbsp;Morning</p>
</div>
         <div class="col-md-2"></div>
         </div>
        </div>
         <br>
   </div>`
}