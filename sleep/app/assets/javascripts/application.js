// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap
//= require bootstrap-material-design
//= require_tree .

	function value_table(){
		// var result = document.getElementById("result");
		// var table = document.createElement("table");
		var table = document.getElementById('table');
		
		var tr1 = document.createElement("tr");
		var th1 = document.createElement("th"); th1.innerText = "Time of Day";
		var th2 = document.createElement("th"); th2.innerText = "The value of sleep for 1 hour";
		tr1.appendChild(th1);
		tr1.appendChild(th2);
		table.appendChild(tr1);


		var tr2 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "19-20";
		var td2 = document.createElement("td"); td2.innerText = "7 hours";
		tr2.appendChild(td1);
		tr2.appendChild(td2);
		table.appendChild(tr2);

		var tr3 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "20-21";
		var td2 = document.createElement("td"); td2.innerText = "6 hours";
		tr3.appendChild(td1);
		tr3.appendChild(td2);
		table.appendChild(tr3);

		var tr4 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "21-22";
		var td2 = document.createElement("td"); td2.innerText = "5 hours";
		tr4.appendChild(td1);
		tr4.appendChild(td2);
		table.appendChild(tr4);

		var tr5 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "22-23";
		var td2 = document.createElement("td"); td2.innerText = "4 hours";
		tr5.appendChild(td1);
		tr5.appendChild(td2);
		table.appendChild(tr5);

		var tr6 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "23-0";
		var td2 = document.createElement("td"); td2.innerText = "3 hours";
		tr6.appendChild(td1);
		tr6.appendChild(td2);
		table.appendChild(tr6);

		var tr7 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "0-1";
		var td2 = document.createElement("td"); td2.innerText = "2 hours";
		tr7.appendChild(td1);
		tr7.appendChild(td2);
		table.appendChild(tr7);

		var tr8 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "1-2";
		var td2 = document.createElement("td"); td2.innerText = "1 hour";
		tr8.appendChild(td1);
		tr8.appendChild(td2);
		table.appendChild(tr8);

		var tr9 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "2-3";
		var td2 = document.createElement("td"); td2.innerText = "30 minutes";
		tr9.appendChild(td1);
		tr9.appendChild(td2);
		table.appendChild(tr9);

		var tr10 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "3-4";
		var td2 = document.createElement("td"); td2.innerText = "15 minutes";
		tr10.appendChild(td1);
		tr10.appendChild(td2);
		table.appendChild(tr10);

		var tr11 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "4-5";
		var td2 = document.createElement("td"); td2.innerText = "7 minutes";
		tr11.appendChild(td1);
		tr11.appendChild(td2);
		table.appendChild(tr11);

		var tr12 = document.createElement("tr");
		var td1 = document.createElement("td"); td1.innerText = "5-6";
		var td2 = document.createElement("td"); td2.innerText = "1 minute";
		tr12.appendChild(td1);
		tr12.appendChild(td2);
		table.appendChild(tr12);

		// result.appendChild(table);
		// result.innerHTML = table;
	}