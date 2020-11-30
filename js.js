let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];

// let tagsUppercased = tags.map(tags => tags.toUpperCase());

document.getElementById("map").innerHTML = "the tags with uppercase : " + tags.map(tags => tags.toUpperCase());
