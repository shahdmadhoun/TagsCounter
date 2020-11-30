let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];

let tagsUppercased = tags.map(tags => tags.toUpperCase());

document.getElementById("map").innerHTML = "the tags with uppercase : " + tagsUppercased;


let filteredItems = tags.filter(tags => tags !== "xml" && tags !== "json")
document.getElementById("filter").innerHTML = "the tags with Exclude all xml and json tags: " + filteredItems;


var wordCountsArray = filteredItems.map(function(item){
    var counter = 0;
    var itemCount = filteredItems.reduce(function(prevVal, curVal){
        if(curVal==item){
            counter++;
        }
        return item+": "+counter;
    },0);

    return item+": "+counter;
})

document.getElementById("reduceMethod").innerHTML = wordCountsArray;
