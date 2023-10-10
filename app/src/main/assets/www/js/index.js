/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    // Cordova is now initialized. Have fun!

    var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://demo.routepro.cloud/prod/bo/api/index/getsyncdata/routeid/1102/userid/15/deviceid/36f238d651dfeaa1/mdate/0/table/4", true);

  // Set headers if needed
  // xhr.setRequestHeader("Content-Type", "application/json");

  // Handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
        // Request was successful

        var response = JSON.parse(xhr.responseText);
        
        console.log(response);
        console.log("Test Response");

        /*for (let o in response.CustomerMaster) {
            document.getElementById("myList").innerHTML += '<li>' + o.customername + '</li>';
        }*/

        response.CustomerMaster.forEach(function(o) {
            document.getElementById("myList").innerHTML += '<li id=' + o.customercode + ' onclick="myFunction()">' + '<a href= "#">' + o.customername + ": " + o.customeraddress1 + ", " + o.customeraddress2 + '</a>' + '</li>';
        })


    } else {
      // Request failed
      console.log("Request failed. Status: " + xhr.status);
    }
  };

  // Handle any errors
  xhr.onerror = function() {
    console.log("Request failed. Check your internet connection.");
  };

  // Send the request
  xhr.send();
}

function myFunction() {
    floatingWindow = window.open("details.html","","height=200,width=400,scrollbars=no");
}
