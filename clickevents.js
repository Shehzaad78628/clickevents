document.addEventListener("DOMContentLoaded", function() {
    var fooButton = document.getElementById("foo");
    var barButton = document.getElementById("bar");
    var foobarButton = document.getElementById("foobar");
    var mainTag = document.querySelector("main");

    fooButton.addEventListener("click", function() {
        var h3Element = document.createElement("h3");
        h3Element.textContent = "Foo";
        mainTag.appendChild(h3Element);
    });

    barButton.addEventListener("click", function() {
        var h3Element = document.createElement("h3");
        h3Element.textContent = "Bar";
        mainTag.appendChild(h3Element);
    });

    foobarButton.addEventListener("click", function() {
        var h2Element = document.createElement("h2");
        h2Element.textContent = "FooBar";
        mainTag.appendChild(h2Element);
    });
});
