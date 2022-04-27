/*
    Author: Donovan Ye
    CS 132 Spring 2022
    Date: April 26, 2022

    This is the cakes.js JavaScript code for the Cake to Bake webpages. It 
    controls the "Explore Recipe" Dropdown navigation, the shopping list toggle 
    view, and the ability to add and remove ingredients to and from the 
    shopping list.
*/


(function() {
    "use strict";
    function init() {
    
        const shop_lst_btn = document.getElementById("shopping-lst-btn");
        const explore_btn = document.getElementById("explore-btn")

        document.querySelectorAll('.ingredient').forEach(item => {
            item.addEventListener('change', toggleShopList)
          })

        shop_lst_btn.addEventListener("click", toggleShopView);
        explore_btn.addEventListener("click", toggleExploreView);
    }
    function toggleShopView() {
        document.getElementById("shopping-lst-panel").classList.toggle("hidden")
    }

    function toggleShopList() {
        const shop_list = document.getElementById("shopping-lst")
        if (this.checked) {
            const node = document.createElement("LI");    
            const textnode = document.createTextNode(this.value);
            node.id = this.name;
            node.appendChild(textnode);     
            shop_list.appendChild(node);
        } else {
            const node = document.getElementById(this.name);
            shop_list.appendChild(node);
            shop_list.removeChild(node);
        }
    }

    function toggleExploreView() {
        document.getElementById("explore-dropdown").classList.toggle("hidden");
    }
    
    init();
    })();
    