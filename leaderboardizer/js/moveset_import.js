function placeBsBtn() {
	var importBtn = "<button id='import' class='bs-btn bs-btn-default'>Import</button>";
	$("#import-1_wrapper").append(importBtn);

	$("#import.bs-btn").click(function () {
		var pokes = document.getElementsByClassName("import-team-text")[0].value;
    // var pokes = document.getElementsByClassName("import-team-text").value;
    // var Leder = $.csv.toArrays(pokes);
    //console.log(pokes);
		addSets(pokes);
	});


}

function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
      return function (a,b) {
                /* next line works with strings and numbers, 
                 *          * and you may want to customize it to your needs
                 *                   */
                        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            }
}


function dynamicSortMultiple() {
      /*
       *      * save the arguments object as it will be overwritten
       *           * note that arguments object is an array-like object
       *                * consisting of the names of the properties to sort by
       *                     */
        var props = arguments;
      return function (obj1, obj2) {
                var i = 0, result = 0, numberOfProperties = props.length;
                /* try getting a different result from 0 (equal)
                 *          * as long as we have extra properties to compare
                 *                   */
                        while(result === 0 && i < numberOfProperties) {
                                      result = dynamicSort(props[i])(obj1, obj2);
                                      i++;
                                  }
                return result;
            }
}



function serialize(array, separator) {
	var text = "";
	for (var i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}


function addSets(pokes) {
	//var rows = pokes.split("\n");
	var currentRow;
	var currentPoke;
	var addedpokes = 0;
	
  //var pokes;
  var i;
  var j;

  var TheData = new Array();
  var Leder = $.csv.toArrays(pokes);
  var streakDataFull = $.csv.toObjects(pokes);
  for (var i = 1; i < Leder.length; i++) {
    TheData[i] = new Object();
    for (var itr = 0; itr < Leder[i].length; itr++) {

      var valName = String(Leder[0][itr]);
      var valValue = Leder[i][itr];

      TheData[i][valName] = String(valValue);
      if (valName === "Streak Length") {
        TheData[i][valName] = parseInt(valValue);
      }
    }
  console.log(TheData[i])
  }

  sorted = TheData.sort(dynamicSortMultiple("User ID", "-Streak Length"));
  console.log(TheData);
  console.log(sorted);

      

//var pokes = document.getElementsByClassName("import-team-text")[0].value;
  //console.log(pokes);
  //console.log(Leder);
  var Ffullout = [];
  var Ufullout = [];
  var Afullout = [];
  var OUTPUT = [];
  var streakDataPrevious;
  //loop the outer array
  if ( Leder[0][0] != "Player Name" ) {
    alert("Invalid data in input field, copypaste the spreadsheet after downloading it as .csv as-is, including the sheet's header");
  }
  for (var i = 1; i < Leder.length; i++) {
     

    console.log(streakDataFull);
    var flags = [], output = [], l = streakDataFull.length, i9;
    for( i9=0; i9<l; i9++) {
          if( flags[streakDataFull[i9]["Type"]] ) continue;
          flags[streakDataFull[i9]["Type"]] = true;
          output.push(streakDataFull[i9]["Type"]);
    }
    console.log(output)

    var typeStreakData = new Object();
    for ( const realType of output ) {
      typeStreakData[realType] = new Array();
    }

    var flags2 = [], output2 = [], l = streakDataFull.length, i8;
    for( i8=0; i8<l; i8++) {
      for ( const realType of output ) {
        if ( streakDataFull[i8]["Type"] === realType ) {
          typeStreakData[realType].push(streakDataFull[i8]);
        }
      }
    }
    console.log(typeStreakData);

    //we got the streaks separated by Type, into arrays typeStreakData["Fire"] and so on

    for ( const realType of output ) {

  var FPlacement = 0;
  var UPlacement = 0;
  //var realType = streakData["Type"];
  var RealPlacement = new Object();
  RealPlacement[realType] = 0;

  var FPlacementVisual = 0;
  var UPlacementVisual = 0;
  var VisualPlacement = new Object();
  VisualPlacement[realType] = 0;



      for ( const streakData of typeStreakData[realType] ) {
        //streakDataPrevious = streakData;
     console.log(streakData); 



    //var CurStreakData = StreakData.filter(function(obj) {
    //  return obj.Type === "Bug" 
    //})
     //if ( streakData["Type"] )

     var teamPokes = [];


    //if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
    //}

    //console.log(parseInt(pokeAmount))


      
     var url1Text = streakData["Team Name"];

    var urlsBbcode = ""

      for ( var itr = 2; itr < 7; itr++ ) {
        var curUrl = streakData["Extra URL " + String(itr)];
        var curUrlText = streakData["Extra URL " + String(itr) + " Text"];
        console.log(curUrl);
        if ( curUrl === "" ) {
          break
        } else {
          urlsBbcode += ", [url=" + curUrl + "]" + curUrlText + "[/url]";
        }
      }
     



    if ( RealPlacement[realType] > 0 ) {

     if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
       VisualPlacement[realType] = VisualPlacement[realType] + 0;
       RealPlacement.CurBbcoded = "   ";
     }
     if ( streakDataPrevious["Streak Length"] === streakData["Streak Length"] ) {
       VisualPlacement[realType] = VisualPlacement[realType] + 0;
       RealPlacement.CurBbcoded = "   ";
     } else {
      VisualPlacement[realType] = VisualPlacement[realType] + 1;
    }
    } else {
      VisualPlacement[realType] = VisualPlacement[realType] + 1;
     if ( String(VisualPlacement[realType]).length === 1 ) { VisualPlacement2 = "0" + String(VisualPlacement[realType]); } else { VisualPlacement2 = VisualPlacement[realType] };
     RealPlacement.CurBbcoded = "#" + String(VisualPlacement2) + ". ";
    }


      
    

      //VisualPlacement[realType] = VisualPlacement[realType] + 1;

     


     if ( streakData["Ongoing"] === "Yes" ) {
       var OngoingStatusBbcode = "[color=#bb0000]*[/color]";
     } else {
       var OngoingStatusBbcode = "";
     };

     if ( streakData["Rental"] === "Yes" ) {
       var RentalBbcode = " [SIZE=1]([color=#007700]Rental[/color])[/SIZE]";
     } else {
       var RentalBbcode = "";
     };



     console.log(RealPlacement)
     console.log(RealPlacement.CurBbcoded)
     console.log(VisualPlacement)
     


     RealPlacement[realType] = RealPlacement[realType] + 1;
     if ( streakData["Streak Length"] === "0" || streakData["Streak Length"] === "" ) {
       var Aout_bbcode = ""
       Aout_bbcode += "[b][user=" + streakData["User ID"] + "]" + streakData["Player Name"] + "[/user][/b]"
       Aout_bbcode += " - "
       Aout_bbcode += "[url=" + streakData["Team URL"] + "]" + streakData["Team Name"] + RentalBbcode + "[/url]"
       Aout_bbcode += urlsBbcode;
       Afullout[RealPlacement[realType]] = Aout_bbcode;
       OUTPUT += Aout_bbcode + "\n";
     } else {
       if ( RealPlacement[realType] === 1 ) {
        // var Aout_bbcode = "\n\nThis is the list for "  + realType + "\n\n"; } else {
         var Aout_bbcode = "\n\n\n[img]https://play.pokemonshowdown.com/sprites/types/" + realType + ".png[/img]" + "\n"; } else {
       var Aout_bbcode = ""; }

       if  ( RealPlacement.CurBbcoded === "   " ) {
       Aout_bbcode += "";
      // Aout_bbcode += "[b][user=" + streakData["User ID"] + "]" + streakData["Player Name"] + "[/user][/b]"
       Aout_bbcode += ", ([b]" + streakData["Streak Length"] + OngoingStatusBbcode + "[/b])" + " - "
       Aout_bbcode += "[url=" + streakData["Team URL"] + "]" + streakData["Team Name"] + RentalBbcode + "[/url]"
       Aout_bbcode += urlsBbcode;
       Afullout[RealPlacement[realType]] = Aout_bbcode;
       OUTPUT += Aout_bbcode;

       } else {
       Aout_bbcode += "\n" + RealPlacement.CurBbcoded;
       Aout_bbcode += "[b][user=" + streakData["User ID"] + "]" + streakData["Player Name"] + "[/user][/b]"
       Aout_bbcode += " ([b]" + streakData["Streak Length"] + OngoingStatusBbcode + "[/b])" + " - "
       Aout_bbcode += "[url=" + streakData["Team URL"] + "]" + streakData["Team Name"] + RentalBbcode + "[/url]"
       Aout_bbcode += urlsBbcode;
       Afullout[RealPlacement[realType]] = Aout_bbcode;
       OUTPUT += Aout_bbcode;
       }

       streakDataPrevious = streakData;
     }

    
      }  
    }




     //var url1Text = teamPoke1 + " / " + teamPoke2 + " / " + teamPoke3 + " / " + teamPoke4;
    //console.log(userName, userId, streakLen, url1, teamPoke1, teamPoke2, teamPoke3, teamPoke4, streakFlags, url2, url2Text, url3, url3Text, url1Text);
    //var TestingTesting = userName + userId + streakLen + url1 + teamPoke1 + teamPoke2 + teamPoke3 + teamPoke4 + streakFlags + url2 + url2Text + url3 + url3Text + url1Text;
    //console.log(TestingTesting);

     //document.getElementsByClassName("leder-result-text")[0].value= TestingTesting;
     // loop the inner array
     //for (var j = 0; j < innerArrayLength; j++) {
     //console.log('[' + i + ',' + j + '] = ' + Leder[i][j]);
     
   }
 // output the list generated into the fullout array to output field 
     //document.getElementsByClassName("leder-result-text-F")[0].value= Ffullout.join("\n");
     console.log(OUTPUT);
     document.getElementsByClassName("leder-result-text-U")[0].value= String(OUTPUT);
     document.getElementsByClassName("leder-result-text-A")[0].value= Afullout.join("\n");
  }



$(document).ready(function () {
	var customSets;
  var Leder;
  var streakDataFull;
	placeBsBtn();
	//if (localStorage.customsets) {
	//	customSets = JSON.parse(localStorage.customsets);
	//	updateDex(customSets);
	//	$(bothPokemon("#importedSetsOptions")).css("display", "inline");
	//}// else {
	//	loadDefaultLists();
	//}
});
