                // Function to toggle the active class on the dropdown container
                function toggleDropdown() {
                var dropdown = document.getElementById("myDropdown");
                dropdown.classList.toggle("active");
                  
                  var overlay = document.getElementById("overlay");
                  overlay.style.display = dropdown.classList.contains("active") ? "block" : "none";
                }
                
                // Function to close the dropdown
                function closeDropdown() {
                  var dropdown = document.getElementById("myDropdown");
                  dropdown.classList.remove("active");
                  
                  var overlay = document.getElementById("overlay");
                  overlay.style.display = "none";
                }
                
                // Close the dropdown if the user clicks outside of it
                window.onclick = function(event) {
                  if (!event.target.matches('.dropdown button') && !event.target.matches('.dropdown-content') && !event.target.matches('.close-btn')) {
                    var dropdowns = document.getElementsByClassName("dropdown");
                    for (var i = 0; i < dropdowns.length; i++) {
                      var openDropdown = dropdowns[i];
                      if (openDropdown.classList.contains('active')) {
                        openDropdown.classList.remove('active');
                        
                        var overlay = document.getElementById("overlay");
                        overlay.style.display = "none";
                      }
                    }
                  }
                }