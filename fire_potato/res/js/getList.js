const target = $('#target');
    fetch("http://185.162.75.92:3000/baccine").then(response => {
        return response.json();
    }).then(data =>{
        const len = Object.keys(data).length;
        for(let i =0;i<len;i++){
            let list = "<tr class=\"inner-box\">";
            list += "<th scope=\"row\">";
            list += "<div class=\"event-date\">";
            list += "<span>";
            list += data[i].created_data.substring(8,10);
            list += "</span>";
            
            const month = data[i].created_data.substring(5,7);
            list += "<p>";
            if(month == 1) list+="January";
            else if(month == 2) list+="Fabruary";
            else if(month == 3) list+="March";
            else if(month == 4) list+="April";
            else if(month == 5) list+="May";
            else if(month == 6) list+="June";
            else if(month == 7) list+="July";
            else if(month == 8) list+="August";
            else if(month == 9) list+="September";
            else if(month == 10) list+="October";
            else if(month == 11) list+="November";
            else if(month == 12) list+="December";
            list += "</p>";

            list += "</div>";
            list += "</th>";
            list += "<td>";
            list += "<div class=\"event-wrap\">";
            list += "<h3>";
            list += data[i].name;
            list += "</h3>";
            
            list += "<div class=\"meta\">";
            list += "<div class=\"organizers\">";
            list += data[i].created_by;
            list += "</div>";
            list += "</div>";
            list += "</div>";
            list += "</td>";

            list += "<td>";
            list += "<div class=\"r-no\">";
            list += "<span>";
            
            list += "<label class=\"switch\">";
            list += "<input type=\"checkbox\" onclick=\"stateUpdate(this)\" name=\""+i+"\"";
            if(!data[i].is_clear) list += ">";
            else list += "checked=\"checked\">";
            
            list += "<span class=\"slider round\"></span>";
            list += "</label>";
            
            if(!data[i].is_clear) list += "<p>안머금</p>";
            else list += "<p>머금</p>";
            
            list += "</span>";
            list += "</div>";
            list += "</td>";
            list += "</tr>";

            target.append(list);
        }
    }).catch(err => {
        alert("error!");
    });